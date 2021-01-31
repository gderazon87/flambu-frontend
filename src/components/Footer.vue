<template>
  <div class="footer">
    <b-container fluid="xl">
      <b-row>
        <b-col lg="3" class="link-boxes mr-5"> 
            <p class="mb-3">Product</p>
            <ul class="link-items">
                <li>Learn</li>
                <li>Guides</li>
                <li>References</li>
                <li>Terms & Conditions</li>
            </ul>
        </b-col>
        <b-col lg="3" class="link-boxes mr-5"> 
            <p class="mb-3">Team</p>
            <ul class="link-items">
                <li>About US</li>
                <li>Careers</li>
                <li>Remote Work</li>
                <li>Partners</li>
            </ul>
        </b-col>
        <b-col lg="3" class="link-boxes mr-5"> 
            <p class="mb-3">Resources</p>
            <ul class="link-items">
                <li>Help Center</li>
                <li>Community</li>
                <li>Customer stories</li>
                <li>FAQ's</li>
            </ul>
        </b-col>
        <b-col>
            <div class="icons mb-5">
                <i class="fab fa-linkedin-in"></i>
                <i class="fab fa-facebook-f"></i> 
                <i class="fab fa-instagram"></i>
            </div>
            <p class="mb-4"> 
                Menachem Begin St. 7
                <br>Ramat Gan, Israel
            </p>
            <p> 
                + 972 52 289 1007
                <br>contact@flambu.il.co
            </p> 
        </b-col>
      </b-row>
      <div class="mt-5 mb-3 text-center">
        Copyright      2021 Flambu. All Rights Reserved
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Footer",
  components: {},
  methods: {},
  data: function() {
    return {};
  },
};
</script>

<style lang="scss">
@import "@/assets/custom/_variables.scss";

.footer {
    background: $highlited-color !important;
    padding-top: 60px;
    padding-bottom: 15px;
    color: white;
    font-size: 13px;
    .link-boxes {
        border-top: 2px solid white;
        padding-top: 15px;
        padding-bottom: 15px;
        p {
            font-size: 16px;
        }
        .link-items {
            padding: 0px;
            margin: 0px;
            list-style: none;
            letter-spacing: 0.14px;
            line-height: 2;
        }
    }
    .icons {
        justify-content: space-between;
        display: flex;
        font-size: 28px;
    }
}
@media (min-width: 1440px) {
    .footer {
        .container-xl {
            max-width: 1320px;
        }
    }
}
</style>
