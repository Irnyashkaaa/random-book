import { Formik, Form, Field } from "formik";
import { SubmitButton } from "formik-antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { books } from "../dataBase";
import {SearchOutlined} from '@ant-design/icons'


export const ChooseBookForm = (props) => {

  const navigate = useNavigate()
  return (
    <Formik
      initialValues={{ kind: 'novels' }}
      onSubmit={(values, { setSubmitting }) => {
        props.setGenre(values.kind)
        let booksCounter = books[`${values.kind}`].length - 1
        let randomBookCode = Math.round(Math.random() * booksCounter)
        props.setCurrentBook(randomBookCode)
        navigate(`/${values.kind}/${randomBookCode}`)
        setSubmitting(false)
      }}
    >
      {() => (
        <Form>
          <Field as='select' defaultValue={'novels'} name="kind" style={{fontSize: '32px'}}>
            <option value="novels">novels</option>
            <option value="classical">classical</option>
            <option value="detectives">detectives</option>
            <option value="fantasy">fantasy</option>
            <option value="antiUtopia">antiUtopia</option>
            <option value="manga">manga</option>
            <option value="psyhology">psyhology</option>
            <option value="bussiness">bussiness</option>
            <option value="culture">culture</option>
          </Field>
          <SubmitButton style={{fontSize: '22px'}}  icon={<SearchOutlined />}>Search</SubmitButton>
        </Form>
      )}
    </Formik>
  )
}