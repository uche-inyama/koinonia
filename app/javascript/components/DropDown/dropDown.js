import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import {
  DropDownListContainer,
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  ListItem
} from './styledDropDown'


const dropDown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null)

  const toggling = () => {
    setIsOpen(!isOpen)
  }


  const onOptionClicked = partner => () => {
    setSelectedOption(partner)
    setIsOpen(false)
  }

  return (
    <DropDownContainer>
      <DropDownHeader onClick={toggling}>Partners</DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {props.partners.map(partner =>
              <Link key={partner.attributes.slug}
                to={`/partners/${partner.attributes.slug}`}
                onClick={onOptionClicked(partner.attributes.slug)}
              >
                <ListItem>{partner.attributes.name}</ListItem>
              </Link>
            )}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  )
}

const mapStateToProps = (state) => ({
  partners: state.partners
})
export default connect(mapStateToProps, null)(dropDown)
