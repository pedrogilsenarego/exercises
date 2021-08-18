const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cinemaSchema = new Schema(
{
  cinemaId: { type: String, required: true },
  displayName: String,
  description: String,
  address1: String,
  city: String,
  phoneNumber: String,
  latitude: String,
  longitude: String,
  parkingInfo: String,
  publicTransport: String,
  concepts: {
    id: String,
    shortName: String,
    vistaAttributeCode: String,
    description: String,
    message: String,
    warningMessage: String,
    salesChannels: String,
    isUsedForConcepts: Boolean,
    isUsedForSessionAdvertising: Boolean,
    displayPriority: String,
    sessionAttributeCinemaIDs: String,
    badgeContent: String,
    badgeHoverContent: String,
    badgeTextColour: String,
    badgeTextColourDark: String,
    badgeBackgroundColour: String,
    badgeBackgroundColourDark: String,
    badgeDisplayOnWebsite: Boolean,
    attributeTheme: String,
    sortOrder: Number,
  },
  imageSrc: String,
  imageAlt: String,
  deactivateTicketPurchases: Boolean,
  disableLoyalty: Boolean,
  disablePaypal: Boolean,
  state: String,
  postcode: String,
  suburb: String,
  disabledPaymentOptions: {
    String
  },
  pageUrl: String,
});

const Cinema = mongoose.model('Cinema', cinemaSchema);

module.exports = Cinema;