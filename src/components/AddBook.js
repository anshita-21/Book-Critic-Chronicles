import React, {useState} from 'react';
import { TailSpin } from 'react-loader-spinner';
import { addDoc } from "firebase/firestore";
import { booksRef } from '../firebase/firebase';
import swal from 'sweetalert'

const AddBook = () => {
    const [form, setForm]=useState(
        {
            title:"",
            author:"",
            description:"",
            img:"",
        }
    );
    const [loading, setLoading]=useState(false);

    const addBook =async ()=>{
        setLoading(true);
        try{
            await addDoc(booksRef, form);
            swal({
                title:"Successfully Added",
                icon: "success",
                buttons: false,
                timer: 3000
            })
        } catch(err){
            swal({
                title:err,
                icon: "error",
                buttons: false,
                timer: 3000
            })
        }
        setLoading(false);
       
    }

    return (
        <div>
            <section class="text-gray-600 body-font relative">
                <div class="container px-5 py-8 mx-auto">
                    <div class="flex flex-col text-center w-full mb-4">
                        <h1 class="sm:text-3xl text-xl font-medium title-font mb-4 text-white">ADD Book</h1>
               
                    </div>
                    <div class="lg:w-1/2 md:w-2/3 mx-auto">
                        <div class="flex flex-wrap -m-2">
                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="name" class="leading-7 text-sm text-gray-300">Book Title</label>
                                    <input type="text" id="name" name="name" 
                                    value={form.title}
                                    onChange={(e)=>setForm({...form, title: e.target.value})}
                                    class="w-full bg-gray-100 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div class="p-2 w-1/2">
                                <div class="relative"> 
                                    <label for="email" class="leading-7 text-sm text-gray-300">Author Name</label>
                                    <input type="email" id="email" name="email" 
                                    value={form.author}
                                    onChange={(e)=>setForm({...form, author: e.target.value})}
                                    class="w-full bg-gray-100  rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div class="p-2 w-full">
                                <div class="relative"> 
                                    <label for="email" class="leading-7 text-sm text-gray-300">Cover Page Link</label>
                                    <input type="email" id="email" name="email" 
                                    value={form.img}
                                    onChange={(e)=>setForm({...form, img: e.target.value})}
                                    class="w-full bg-gray-100  rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div class="p-2 w-full">
                                <div class="relative">
                                    <label for="message" class="leading-7 text-sm text-gray-300">Description</label>
                                    <textarea id="message" name="message"
                                    value={form.description}
                                    onChange={(e)=>setForm({...form, description: e.target.value})}
                                    class="w-full bg-gray-100 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>
                            <div class="p-2 w-full">
                                <button onClick={addBook} class="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
                                    {loading ? <TailSpin height={25} color='white' /> : 'Submit' }</button>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AddBook