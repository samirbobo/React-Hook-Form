/* 
  - useForm 
  ---- هو هوك مخصص لإدارة النماذج بسهولة ويجعل الكمبونانت لا يتم تحديثه عند تغير قيم الانبوتس ودا امر مهم 
  ---- ويجعل المكون بتاعي سريع وبجوده ثابتهم

  - register 
  ---- هو اول بروبس من البروبسيس الخاصه بالهوك وبتخلني اتتبع كل الحالات الي بيتعرض ليها الانبوت بتاعنا من تغير قيمه 
  ---- وظهور اخطاء واشياء اخره المثال التالي سيوضح كيفيه استخدامها مع الانبوت 

  - const { onChange, onBlur, name, ref } = register('firstName'); 
  ---- دي كل الخواص بتاعت الفانكشن بتاعتنا وازاي نستخدمها 
  ---- ليست الطريقه الصحيحه 
  <input 
    onChange={onChange} // assign onChange event 
    onBlur={onBlur} // assign onBlur event
    name={name} // assign name prop
    ref={ref} // assign ref prop
  />

  ---- هذه هي الطريقه الصحيحه لاستخدامها مع الانبوت
  <input {...register('firstName')} />

  - handleSubmit 
  ---- تاني بروبس موجوده داخل الهوك بتاعتنا وتستخدم في عمل سبمت للنموذج وتاخذ بداخلها فانكشن لتقوم ببعض الاكواد في 
  ---- حاله ارسال البيانات من النموج للسيرفر ولا تقوم بعمل اعاده تحميل للصفحه وهذا مما يحسن جوده موقعنا

  - DevTool 
  ---- دي اداه بتخلني اشوف كل التغيرات الي بتحصل علي الانبوتس بتاعتي بشكل سهل جدا
*/


/* 
  - Form Validation: 
  ---- الاسلوب دا بيخلني اتحقق من صحه البيانات الي اضافه جوه الانبوتس بتاعتي وليها خواص بتقبلها زي
  ---- [required, min, max, minLength, maxLength, pattern, validate]

  - required بتخلي الانبوت بتاعي اجباري ومينفعش ابعت البيانات للسيرفر من غير ملائه بالبيانات
  ---- {required: "UserName is Required"} or {required: {value: true | false, message: "UserName is Required"} شكله في الكتابه 

  - pattern بتخلني اتحقق من البيانات الي داخله ديه هل هي علي نفس الشكل الي انا عايزه ولا بيانات اي كلام وغير صحيحه
  ---- {pattern: {value: /[a-zA-Z0-9]+/, message: "Invalid UserName"}} شكله في الكتابه

  - validate تستخدم لانشاء نوع فلتر معين علي البيانات الي داخله للتاكد من صحتها وبتقبل فانكشن بس
  ---- في لو هتعمل اتشك واحد بس يبقا حط فانكشن علطول ولو اكتر من فانكشن اعمل علامات الاقواس المجعده وحط فيها اي
  ---- عدد من الفانكشن براحتك بس علي شكل اوبجيكت كيه وي قيمته الفانكشن

  - formState 
  --- هي خاصيه بترجع عند استخدام اليوز هوك وباخد منها متغير وهو ال ايرورز عشان لو ظهر ايرور في اي انبوت نطبع الايرور علطول
*/


/* 
  - defaultValues 
  ---- ديه بروبس داخل اليوز رياكت هوك بتقبل مني قيم افتراضيه للنموذج بتاعنا ودا مثال عليها 
  defaultValues: {
      userName: "Samir",
      email: "",
      channel: "",
    }

  ---- ومن الممكن انها تقبل كمان ابي ايه ونجيب بيانات من السيرفر ونعرضها كبيانات افتراضيه اوليه في النموذج مثال علي دا
  defaultValues: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      const data = await response.json();
      return { userName: data.username, email: data.email, channel: "" };
    }

  - useFieldArray
  ---- دي هوك جديده و بتستخدم في اضافه انبوتس وحذفها بشكل دينامك باستخدام اليورز وليها بروبس مهمه وهم
  ---- والهوك دي بتاخد برامتير عباره عن اوبجيكت فيه اسم الانبوت الي عايز اضيف منه نسخ جديده اضافيه او احذفها
  ---- control وكمان عنصر اسمه 
  
  - fields 
  ---- دي بتعبر عن مصفوفه فيها كل الانبوتس الي تم اضافتهم او بعد حذفهم

  - append 
  ---- دي فانشكن بتقبل مني الخاصيه المميزه للانبوتس عشان اضيفه في الارايه بتاعت الفيلدس

  - remove
  ---- دي فانكشن بحذف بيها اي انبوت موجد او تمت اضافته حديثا عن طريق الاندكس بتاعه
*/

/*
  - getValues() 
  ---- دي فانشكن بتخلني اعرض او احصل علي كل قيم الانبوتس الي عندي في الفورم
  ----- getValues("userName") ممكن تعرض كل القيم وممكن تعرض قيمه انبوت معين عن طريقه كتابه اسمه بداخل الفانكشن دي زي كده 
  ----- getValues(["userName", "age"])  وممكن تعرض قيمه اكتر من انبوت معين عن طريقه كتابه اسماهم علي شكل ارايه بداخل الفانكشن دي زي كده 

  - dirtyFields
  ---- دي زي متغير بيتحط فيه اتومتك كل اسماء الانبوتس الي اتغيرت قيمها

  - touchedFields
  ---- دي زي متغير بيتحط فيه اتومتك كل اسماء الانبوتس الي اتعمل عليها فوكس ومن ثم روحت من عليها

  - isDirty
  ---- دي متغير قيمته بتبدل لو كل القيم اتغيرت او لا 

  - isValid 
  ---- متغير بتكون قيمته الافتراضيه خطاء لان كل الانبوت بتاعتنا بتكون لسه محتاجه ادخلها بيانات صحيحه
  ---- وبتكون صحيحه عندما كل الانبوت تكون بياناتها صحيحه ويمكن استخدامها لتفعيل زر الارسال لو كل البيانات كانت صحيحه فقط

  - isSubmitting
  ---- متغير بتكون قيمته الافتراضيه خطاء وفي اتناء ارسال البيانات عبر النموذج يتحول الي صح وبعد انهاء ارسال البيانات يعود الي خطاء
  ---- وهو مفيد في حاله جعل زر الارسال غير قابل للنقر اثناء ارسال البيانات لمنع تكرار ارسال البيانات اكثر من مره 

  - isSubmitted 
  ---- متغير بتكون قيمته الافتراضيه خطاء وبعد ارسال البيانات عبر النموذج يتحول الي صح 

  - isSubmitSuccessful
  ---- زي المتغير الي قابله بس الفرق الوحيد ان لازم تكون البيانات الي مبعوته خلال النموذج تكون كلها صح ويتم الارسال بدون اخطاء في البيانات

  - submitCount
  ---- متغير بتكون قيمته الافتراضيه صفر وفي كل مره بنرسل فيها البيانات بشكل صحيح بيزيد واحد
*/

/*
  - mode
  ---- ديه خاصيه موجوده جوه رياكت هوك فورم وهي بتخلني اتحكم في امته اعمل فحص للحقول بتاعتي ومعرفه هل تمتلك بيانات صحيحه ام لا
  ---- وبتقبل مني العديد مت الخيارات زي 

  - onSubmit بيفحص الانبوتس في حاله عمل سبمت لنوذج كله
  - onBlur بيفحص الانبوت في حاله اني عملت فوكس عليه بالموس وبعدين مشيت عن الحقل 
  - onTouched بيفحص الانبوت زي الخاصيه الي قابله بظبط الفرق الوحيد اني لما باجي اكتب في الحقل الايرور بيختفي ولما بخرج من الحقل بيفحصه تاني ولو في لسه يرور بيظهر
  - all هو مزيج بين الاتنين الي قابله
  - onChange بيفحص الانبوت مع كل مره بيغير اي حرف فيه
*/