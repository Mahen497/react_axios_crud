import { useEffect, useState } from "react";
import { postData, updateData } from "../api/PostApi";

const Form = ({ data, setData, updateDataApi, setUpdateDataApi }) => {
   // const [addData, setAddData] = useState({ title: "", body: "" });
   const [addData, setAddData] = useState({
      title: "",
      body: ""
   });

   let isEmpty = Object.keys(updateDataApi).length === 0;

   useEffect(() => {
      setAddData({
         title: updateDataApi.title || "",
         body: updateDataApi.body || ""
      });
   }, [updateDataApi]);

   // ✅ input change handler
   const handleInputChange = (e) => {
      // setAddData({ ...addData, [e.target.name]: e.target.value });
      const name = e.target.name;
      const value = e.target.value;
      setAddData((addData) => {
         return {
            ...addData,
            [name]: value
         };
      });
   };


   const addPostData = async () => {
      try {
         const res = await postData(addData);
         if (res.status === 201) {
            setData([...data, res.data]);
            setAddData({ title: "", body: "" });
            console.log("Post Added Successfully");
         }
      } catch (error) {
         console.error("Error adding post:", error);
      }
   }

   const updatePostData = async () => {
      try {
         const res = await updateData(updateDataApi.id, addData)
         console.log('res', res); 

         setData((prev)=>{
            return prev.map((curElem)=>{
               return curElem.id === res.data.id ? res.data : curElem;
            })
         })
         setAddData({ title: "", body: "" }); // ✅ Reset the input fields
         setUpdateDataApi({}); // ✅ Clear updateDataApi
         console.log("Post Updated Successfully");

      } catch (error) {
         console.log(error);
         console.error("Error updating post:", error);

      }
   }

   // ✅ Submit handler
   const handleFormSubmit = (e) => {
      e.preventDefault();
      const action = e.nativeEvent.submitter.value;;
      console.log(action);
      if (action === 'Add') {
         addPostData();
      } else if (action === 'Edit') {
         updatePostData();
      }
   };

   return (
      <>
         <form onSubmit={handleFormSubmit}>
            <div>
               <label htmlFor="title"></label>
               <input type="text" id="title" name="title" placeholder="Add Title" value={addData.title} onChange={handleInputChange} />
            </div>
            <br />
            <div>
               <label htmlFor="body"></label>
               <input type="text" id="body" name="body" placeholder="Add Body" value={addData.body} onChange={handleInputChange} />
            </div>
            <br />
            <button type="submit" value={isEmpty ? 'Add' : 'Edit'}>
               {
                  `${isEmpty ? 'Add ' : 'Edit '} Post`
               }
            </button>
         </form>
         <div>
            {/* https://drive.google.com/drive/folders/1FOKganXnOHidiFLfypQh7aFTuaI5zNB2
            https://drive.google.com/drive/folders/1bgaD4xPOosFlZU0UlKP8Es8L0WzvGFF3
            https://drive.google.com/drive/folders/1K_CNACJO--OmcV3BK_Xzm2wMB12mBkZN
            https://drive.google.com/drive/folders/1hBJb7Cj3tpVtUPDgxtRCw1l-T5yEH_Je */}
         </div>
      </>
   );
}

export default Form;