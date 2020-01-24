<template>
  <div class="margin-container">
    <!--MAPS -->
    <div class="container-fluid">
      <div class="row" style="padding-bottom: 50px">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2951.6042959105653!2d18.83154375034075!3d42.286969547605985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134dd49850397937%3A0x7b23c1173f116a85!2sVilla%20Imperija!5e0!3m2!1sen!2s!4v1578512842568!5m2!1sen!2s"
          width="100%"
          height="420"
          frameborder="0"
          style="border:0"
          allowfullscreen
        ></iframe>
      </div>
    </div>

    <!--Contact-->

    <div class="container">
      <h3 class="text-left">CONTACT FORM</h3>
      <br />

      <div class="row text-left">
        <div class="col-lg-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            eros ipsum, dapibus vitae lectus sed, pretium feugiat elit. Integer
            id porta mi.
          </p>
          <form name="posts" action="/post" method="post" onsubmit="return validateForm()">
            <input id="size" class="form-control" name="name" placeholder="Name..." />
            <br />
            <input id="size" class="form-control" name="phone" placeholder="Phone..." />
            <br />
            <input id="size" class="form-control" name="email" placeholder="E-mail..." />
            <br />
            <textarea id="size1" class="form-control" name="text" style="height:150px;"></textarea>
            <br />
            <input class="btn btn-primary" type="submit" value="Send" />
            <br />
            <br />
          </form>
        </div>
        <div class="col-lg-4">
          <b>CONTACT INFO:</b>
          <br />
          <br />Imperija
          <br />Jadranski put bb
          <br />85310 Budva
          <br />Montenegro
          <br />

          <br />
          <br />

          <br />Mobile: +382 67 474 392
          <br />Fax: +382 33 457 001, 457 002, 457
          003
          <br />Skype: imperijabudva
          <br />E-mail:
          <a href="mailto:imperijabudva@t-com.me">imperijabudva@t-com.me</a>
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style scoped>
.margin-container {
  margin-bottom: 60px;
}
</style>
