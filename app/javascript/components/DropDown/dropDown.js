import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  DropDownListContainer,
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  ListItem
} from './styledDropDown'

const dropDown = ({ partners }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null)

  const toggling = () => {
    console.log(partners)
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
            {partners.map((partner, index) =>
              <Link to={'/partners/viavi'} key={index}>
                <ListItem onClick={onOptionClicked(partner)} key={index} className="partner-profile">
                  {partner.name}
                </ListItem>
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
