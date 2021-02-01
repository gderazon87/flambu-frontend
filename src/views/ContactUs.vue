<template>
  <div>
    <b-container class="contact-us">
        <b-row>
            <b-col md="6" class="pr-4">
                <h1 class="let-us-hear-text">Let us hear what you’ve gotta say</h1>
            </b-col>
            <b-col md="6" class="pl-4">
                <b-img :src="drawContactUsImg" > </b-img>
            </b-col>
        </b-row>
        <b-row class="mt-5">
            <b-col md="6">
                <b-img :src="contactMapImg" style="max-height:300px;"></b-img>
                <div class="d-flex mt-4">
                    <i class="fas fa-map-marker-alt mr-4"></i>
                    Menachem St 7, Ramat Gan
                </div>
                <div class="d-flex mt-3">
                    <i class="fas fa-phone mr-4"></i>
                    +972 52 289 10 07
                </div>
            </b-col>
            <b-col md="6">
                <b-form class="custom-form">
                    <b-form-group>
                        <b-form-input
                            v-model="contactForm.name"
                            type="text"
                            placeholder="Your Name"
                            required
                            ></b-form-input>
                    </b-form-group>
                    <b-form-group class="mt-5">
                        <b-form-input
                            v-model="contactForm.email"
                            type="email"
                            placeholder="Your Email*"
                            required
                            ></b-form-input>
                    </b-form-group>
                    <b-form-group class="mt-5">
                        <b-form-textarea
                            v-model="contactForm.message"
                            placeholder="Go ahead, we're listening..."
                            rows="5"
                        ></b-form-textarea>
                    </b-form-group>
                    <b-button type="submit" class="pink-round-btn contact-submit-btn mt-4">Submit</b-button>
                </b-form>
            </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>
import drawContactUsImg from '@/assets/img/draw_contact_us.png';
import contactMapImg from '@/assets/img/contact-map.png';

export default {
  name: 'ContactUs',
  components: {
  },
  data: function() {
    return {
      drawContactUsImg,
      contactMapImg,
      contactForm: {
          name: '',
          email: '',
          message: ''
      }
    };
  }
}
</script>

<style lang="scss">
@import "@/assets/custom/_variables.scss";

.contact-us {
    margin-top: 6em;
    margin-bottom: 2em;
    font-size: 18px;
    .let-us-hear-text {
        color: #313131;
        font-weight: bold;
        font-size: 42px;
    }
    .custom-form {
        font-weight: 500;
        .contact-submit-btn {
            width: 100%;
        }
    }
    img {
        max-width: 100%;
    }
    .fa-map-marker-alt {
        color: $highlited-color;
    }
    /* temorary code ;  Will remove when get fontawesome pro new version  */
    .fa-phone {
        transform: rotate(90deg);
    }
}
</style>
