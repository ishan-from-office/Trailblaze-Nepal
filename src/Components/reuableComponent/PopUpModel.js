import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Tab,
  Tabs,
  Table,
  Modal,
} from 'react-bootstrap'
import ReactImageMagnify from 'react-image-magnify'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function PopUpModel(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.handleclose}
      backdrop="static"
      keyboard={false}
      centered
      className={props.className}
    >
      <Modal.Header closeButton>
        <Modal.Title>{props.header}</Modal.Title>
      </Modal.Header>
      <Modal.Body className={props.vediomodal}>{props.body}</Modal.Body>
      {props.footer && <Modal.Footer>{props.footer}</Modal.Footer>}
    </Modal>
  )
}
