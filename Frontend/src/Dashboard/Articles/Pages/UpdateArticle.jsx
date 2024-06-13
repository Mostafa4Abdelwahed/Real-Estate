import { Alert, AlertIcon, Button, FormControl, FormLabel, HStack, Input, InputGroup, InputLeftAddon, InputRightAddon, Radio, RadioGroup, Select, Textarea, Toast, useToast } from "@chakra-ui/react"
import Container from "../../../Ui/Container"
import { useState } from "react"


const AddArticle = () => {
    const [addLoading, setAddLoading] = useState(false);
    const toast = useToast();
    const [article, setArticle] = useState({
        title: "",
        image: "",
        content: ""
    })


    const handleSubmit = ()=>{
        if (article.content === "" || article.image === "" || article.title === "") {
            return toast({
                title: 'غير مكتلمة.',
                description: "برجاء ملئ جميع الحقول.",
                status: 'error',
                duration: 2000,
                position: "bottom-left"
              })      
        } 
    }
    return (
        <div>
            <Container>
                <header className="flex justify-between mt-5">
                    <h1 className="text-2xl font-bold">تعديل المقال</h1>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-7">
                    <FormControl>
                        <FormLabel>العنوان</FormLabel>
                        <Input value={article.title} onChange={(e)=>{setArticle({...article, title: e.target.value})}} variant="white" type='text' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>الصورة</FormLabel>
                        <Input className="bg-white" onChange={(e)=>{setArticle({...article, image: e.target.files[0]})}} variant="white" type='file' />
                    </FormControl>
                </div>
                    <FormControl className="mt-3">
                        <FormLabel>المحتوي</FormLabel>
                        <Textarea rows={15} value={article.content} onChange={(e)=>{setArticle({...article, content: e.target.value})}} variant="white" type='text' />
                    </FormControl>
                <FormControl>
                    <Button onClick={handleSubmit} isLoading={addLoading} loadingText='جاري التعديل' className="my-7 w-full" colorScheme='teal'>تعديل المقال</Button>
                </FormControl>
            </Container>
        </div>
    )
}

export default AddArticle