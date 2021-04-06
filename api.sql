PGDMP         8                y         
   api_angelo    12.3    12.3 3    E           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            F           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            G           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            H           1262    17497 
   api_angelo    DATABASE     �   CREATE DATABASE api_angelo WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';
    DROP DATABASE api_angelo;
                me    false            �            1259    17498 	   customers    TABLE     �   CREATE TABLE public.customers (
    custid integer NOT NULL,
    "custName" character varying(100),
    "custContact" character varying(200),
    "custAddress" character varying(300),
    "custStatus" character varying(10)
);
    DROP TABLE public.customers;
       public         heap    me    false            �            1259    17504    customers_custid_seq    SEQUENCE     �   CREATE SEQUENCE public.customers_custid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.customers_custid_seq;
       public          me    false    202            I           0    0    customers_custid_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.customers_custid_seq OWNED BY public.customers.custid;
          public          me    false    203            �            1259    17662    deliveryTransactions    TABLE     �   CREATE TABLE public."deliveryTransactions" (
    "deliveryTransactionId" smallint NOT NULL,
    date date NOT NULL,
    "grandTotal" integer NOT NULL,
    supid integer,
    "deliveryDate" date
);
 *   DROP TABLE public."deliveryTransactions";
       public         heap    postgres    false            �            1259    17754    delivery    SEQUENCE     w   CREATE SEQUENCE public.delivery
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 52000000
    CACHE 1;
    DROP SEQUENCE public.delivery;
       public          postgres    false    211            J           0    0    delivery    SEQUENCE OWNED BY     _   ALTER SEQUENCE public.delivery OWNED BY public."deliveryTransactions"."deliveryTransactionId";
          public          postgres    false    213            �            1259    17514    items    TABLE       CREATE TABLE public.items (
    id integer NOT NULL,
    name character varying(200),
    barcode character varying(15),
    description character varying(200),
    price integer,
    quantity integer,
    "itemStatus" character varying,
    supid integer
);
    DROP TABLE public.items;
       public         heap    postgres    false            �            1259    17512    itemData_id_seq    SEQUENCE     �   CREATE SEQUENCE public."itemData_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."itemData_id_seq";
       public          postgres    false    205            K           0    0    itemData_id_seq    SEQUENCE OWNED BY     B   ALTER SEQUENCE public."itemData_id_seq" OWNED BY public.items.id;
          public          postgres    false    204            �            1259    17642    itemDeliveries    TABLE     �   CREATE TABLE public."itemDeliveries" (
    id integer NOT NULL,
    quantity integer NOT NULL,
    "deliveryTransactionsId" integer NOT NULL,
    "subTotal" integer NOT NULL
);
 $   DROP TABLE public."itemDeliveries";
       public         heap    postgres    false            �            1259    17627 	   itemSales    TABLE     �   CREATE TABLE public."itemSales" (
    id integer NOT NULL,
    quantity integer NOT NULL,
    "salesTransactionId" integer NOT NULL,
    "subTotal" integer NOT NULL
);
    DROP TABLE public."itemSales";
       public         heap    postgres    false            �            1259    17617    salesTransactions    TABLE     �   CREATE TABLE public."salesTransactions" (
    custid integer NOT NULL,
    date date,
    total integer,
    "salesTransactionId" smallint NOT NULL
);
 '   DROP TABLE public."salesTransactions";
       public         heap    postgres    false            �            1259    17719 (   salesTransactions_salesTransactionId_seq    SEQUENCE     �   CREATE SEQUENCE public."salesTransactions_salesTransactionId_seq"
    AS smallint
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 A   DROP SEQUENCE public."salesTransactions_salesTransactionId_seq";
       public          postgres    false    208            L           0    0 (   salesTransactions_salesTransactionId_seq    SEQUENCE OWNED BY     {   ALTER SEQUENCE public."salesTransactions_salesTransactionId_seq" OWNED BY public."salesTransactions"."salesTransactionId";
          public          postgres    false    212            �            1259    17525 	   suppliers    TABLE     �   CREATE TABLE public.suppliers (
    supid integer NOT NULL,
    "supName" character varying(100),
    "supContact" character varying(30),
    "supAddress" character varying(200),
    "supStatus" character varying(15)
);
    DROP TABLE public.suppliers;
       public         heap    postgres    false            �            1259    17523    suppliers_supid_seq    SEQUENCE     �   CREATE SEQUENCE public.suppliers_supid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.suppliers_supid_seq;
       public          postgres    false    207            M           0    0    suppliers_supid_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.suppliers_supid_seq OWNED BY public.suppliers.supid;
          public          postgres    false    206            �
           2604    17506    customers custid    DEFAULT     t   ALTER TABLE ONLY public.customers ALTER COLUMN custid SET DEFAULT nextval('public.customers_custid_seq'::regclass);
 ?   ALTER TABLE public.customers ALTER COLUMN custid DROP DEFAULT;
       public          me    false    203    202            �
           2604    17757 *   deliveryTransactions deliveryTransactionId    DEFAULT     �   ALTER TABLE ONLY public."deliveryTransactions" ALTER COLUMN "deliveryTransactionId" SET DEFAULT nextval('public.delivery'::regclass);
 ]   ALTER TABLE public."deliveryTransactions" ALTER COLUMN "deliveryTransactionId" DROP DEFAULT;
       public          postgres    false    213    211            �
           2604    17517    items id    DEFAULT     i   ALTER TABLE ONLY public.items ALTER COLUMN id SET DEFAULT nextval('public."itemData_id_seq"'::regclass);
 7   ALTER TABLE public.items ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    205    204    205            �
           2604    17721 $   salesTransactions salesTransactionId    DEFAULT     �   ALTER TABLE ONLY public."salesTransactions" ALTER COLUMN "salesTransactionId" SET DEFAULT nextval('public."salesTransactions_salesTransactionId_seq"'::regclass);
 W   ALTER TABLE public."salesTransactions" ALTER COLUMN "salesTransactionId" DROP DEFAULT;
       public          postgres    false    212    208            �
           2604    17528    suppliers supid    DEFAULT     r   ALTER TABLE ONLY public.suppliers ALTER COLUMN supid SET DEFAULT nextval('public.suppliers_supid_seq'::regclass);
 >   ALTER TABLE public.suppliers ALTER COLUMN supid DROP DEFAULT;
       public          postgres    false    206    207    207            7          0    17498 	   customers 
   TABLE DATA           c   COPY public.customers (custid, "custName", "custContact", "custAddress", "custStatus") FROM stdin;
    public          me    false    202   =       @          0    17662    deliveryTransactions 
   TABLE DATA           t   COPY public."deliveryTransactions" ("deliveryTransactionId", date, "grandTotal", supid, "deliveryDate") FROM stdin;
    public          postgres    false    211   A       ?          0    17642    itemDeliveries 
   TABLE DATA           ^   COPY public."itemDeliveries" (id, quantity, "deliveryTransactionsId", "subTotal") FROM stdin;
    public          postgres    false    210   �A       >          0    17627 	   itemSales 
   TABLE DATA           U   COPY public."itemSales" (id, quantity, "salesTransactionId", "subTotal") FROM stdin;
    public          postgres    false    209   3B       :          0    17514    items 
   TABLE DATA           e   COPY public.items (id, name, barcode, description, price, quantity, "itemStatus", supid) FROM stdin;
    public          postgres    false    205   �B       =          0    17617    salesTransactions 
   TABLE DATA           X   COPY public."salesTransactions" (custid, date, total, "salesTransactionId") FROM stdin;
    public          postgres    false    208   �F       <          0    17525 	   suppliers 
   TABLE DATA           ^   COPY public.suppliers (supid, "supName", "supContact", "supAddress", "supStatus") FROM stdin;
    public          postgres    false    207   �G       N           0    0    customers_custid_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.customers_custid_seq', 101, true);
          public          me    false    203            O           0    0    delivery    SEQUENCE SET     7   SELECT pg_catalog.setval('public.delivery', 27, true);
          public          postgres    false    213            P           0    0    itemData_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."itemData_id_seq"', 87, true);
          public          postgres    false    204            Q           0    0 (   salesTransactions_salesTransactionId_seq    SEQUENCE SET     Z   SELECT pg_catalog.setval('public."salesTransactions_salesTransactionId_seq"', 150, true);
          public          postgres    false    212            R           0    0    suppliers_supid_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.suppliers_supid_seq', 24, true);
          public          postgres    false    206            �
           2606    17508    customers customers_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_pkey PRIMARY KEY (custid);
 B   ALTER TABLE ONLY public.customers DROP CONSTRAINT customers_pkey;
       public            me    false    202            �
           2606    17743 /   deliveryTransactions deliveryTransactions_pkey1 
   CONSTRAINT     �   ALTER TABLE ONLY public."deliveryTransactions"
    ADD CONSTRAINT "deliveryTransactions_pkey1" PRIMARY KEY ("deliveryTransactionId");
 ]   ALTER TABLE ONLY public."deliveryTransactions" DROP CONSTRAINT "deliveryTransactions_pkey1";
       public            postgres    false    211            �
           2606    17522    items itemData_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.items
    ADD CONSTRAINT "itemData_pkey" PRIMARY KEY (id);
 ?   ALTER TABLE ONLY public.items DROP CONSTRAINT "itemData_pkey";
       public            postgres    false    205            �
           2606    17726 (   salesTransactions salesTransactions_pkey 
   CONSTRAINT     |   ALTER TABLE ONLY public."salesTransactions"
    ADD CONSTRAINT "salesTransactions_pkey" PRIMARY KEY ("salesTransactionId");
 V   ALTER TABLE ONLY public."salesTransactions" DROP CONSTRAINT "salesTransactions_pkey";
       public            postgres    false    208            �
           2606    17542    suppliers supid 
   CONSTRAINT     K   ALTER TABLE ONLY public.suppliers
    ADD CONSTRAINT supid UNIQUE (supid);
 9   ALTER TABLE ONLY public.suppliers DROP CONSTRAINT supid;
       public            postgres    false    207            �
           2606    17530    suppliers suppliers_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public.suppliers
    ADD CONSTRAINT suppliers_pkey PRIMARY KEY (supid);
 B   ALTER TABLE ONLY public.suppliers DROP CONSTRAINT suppliers_pkey;
       public            postgres    false    207            �
           2606    17622    salesTransactions custid    FK CONSTRAINT     �   ALTER TABLE ONLY public."salesTransactions"
    ADD CONSTRAINT custid FOREIGN KEY (custid) REFERENCES public.customers(custid);
 D   ALTER TABLE ONLY public."salesTransactions" DROP CONSTRAINT custid;
       public          postgres    false    208    202    2727            �
           2606    17758 %   itemDeliveries deliveryTransactionsId    FK CONSTRAINT     �   ALTER TABLE ONLY public."itemDeliveries"
    ADD CONSTRAINT "deliveryTransactionsId" FOREIGN KEY ("deliveryTransactionsId") REFERENCES public."deliveryTransactions"("deliveryTransactionId") ON DELETE CASCADE;
 S   ALTER TABLE ONLY public."itemDeliveries" DROP CONSTRAINT "deliveryTransactionsId";
       public          postgres    false    210    2737    211            �
           2606    17732    itemSales id    FK CONSTRAINT     z   ALTER TABLE ONLY public."itemSales"
    ADD CONSTRAINT id FOREIGN KEY (id) REFERENCES public.items(id) ON DELETE CASCADE;
 8   ALTER TABLE ONLY public."itemSales" DROP CONSTRAINT id;
       public          postgres    false    205    2729    209            �
           2606    17763    itemDeliveries id    FK CONSTRAINT        ALTER TABLE ONLY public."itemDeliveries"
    ADD CONSTRAINT id FOREIGN KEY (id) REFERENCES public.items(id) ON DELETE CASCADE;
 =   ALTER TABLE ONLY public."itemDeliveries" DROP CONSTRAINT id;
       public          postgres    false    205    2729    210            �
           2606    17737    itemSales salesTransactionId    FK CONSTRAINT     �   ALTER TABLE ONLY public."itemSales"
    ADD CONSTRAINT "salesTransactionId" FOREIGN KEY ("salesTransactionId") REFERENCES public."salesTransactions"("salesTransactionId") ON DELETE CASCADE;
 J   ALTER TABLE ONLY public."itemSales" DROP CONSTRAINT "salesTransactionId";
       public          postgres    false    208    209    2735            �
           2606    17687    items supid    FK CONSTRAINT     o   ALTER TABLE ONLY public.items
    ADD CONSTRAINT supid FOREIGN KEY (supid) REFERENCES public.suppliers(supid);
 5   ALTER TABLE ONLY public.items DROP CONSTRAINT supid;
       public          postgres    false    207    2733    205            �
           2606    17692    deliveryTransactions supid    FK CONSTRAINT     �   ALTER TABLE ONLY public."deliveryTransactions"
    ADD CONSTRAINT supid FOREIGN KEY (supid) REFERENCES public.suppliers(supid);
 F   ALTER TABLE ONLY public."deliveryTransactions" DROP CONSTRAINT supid;
       public          postgres    false    207    211    2733            7   �  x���QO�8ǟ�O᷃�Sl�q��r���Պ�!�{7q��+'���IKC`�NM%����������-;�Mn�,9bBr��x���	�vi�n�x��Gs���0�"�b�����L�#'�\@�-؉�:��%:�wr�]��
];�+Isf\�Hg'�~6/;�M��Tp��Ќ�(}%�����YDg�إ�9,~�`;vm�Y�0��)��P'� �(�e�]ЪZ�����qq�3Oe)2˶�ɇ&U[G=�������2V'��-J��+�e�1�ɲ���Gp�AvoL�A���Ұk��!�2Uig���e�|B*8nK�4U�5���a
$p6.ǵ	;�S|����vi�Yv}���R{�����u�w�7�.g�.[�U*�+,��T��H��X�dYǠx*��i)uz������9��"�,���sO%1Z�ئ3���BJ�vq<�͇eR�P�E�۶�U�?z���[(�)�|,͢DoEeQ��h�P��~C�)������)�u���*oICc��,mݾ̐ѰU�Me�nc� 8O���郷M]��C�m����i%��G�ǙԂ
@%���u��U�c�$�|(�!Iˆ��$�d�O�&��蒽�s2M�ϫRR�Y���|�(��(W{����h�U��<���WE_?�#����a[k�@	��Ե*���y-�ǼGVb��X%dB�[R�Uc�i	%�dO���<ZQN�֘�-)h�6�A'���@���C�|UЃ@�Zj��d�H)d�W8qp���j�:{~��Shp�.�b�J�dp���n�B�!�#��n���QN��4��~m:�%M%pj�bp��C���nݪ���Tl�3��3D�L� j��0���@����	5�eS��?Sn��R�!gP��a�_�X�
���;����g��]~F��/���o{�)lK���I�v�nw���0��ZvC�8���
���R�`��-�w��Jc:W���v�!��Ӎ�/��<88�	$qK�      @   n   x�}���0��s�(I��L��� 	!�ds�|�eK�n�Ʀ%��=E��8�90�s��1̦�I��t#�F�m9���V��n�_��vW�F܉g�A���_o���E���l�      ?   �   x�e��� г(&#	$۽��:�ǎwN,�obڇ�X��x���H^�s�y�1I�x�����ޏ���O��އ����n
���=��Ab�T��	���$:�.���I��Ȑ�ȑ*QEjD)�)��~�N�O)�4�R�      >   _   x�m�A�0��PJۿ��wX���@�af7Q8؀��Tk(��X�Ǐ�?�~��t(�×NRZ�3'NW�;Kj&k&m��v{�:��(i      :     x��U�n�6�><}�
ۀ��IS)�_��D�U�7�`��	�Ly��,m�c��}�僥`������kw없<b*3��U0o��9�,Y�&�i�r�_ee���R2s7�WV�D%t͂�k�|Q;�f6�H�N��>�������i���䂓�(�O��8<+��&�B���|m��/t�$��&�V�7��:�P��8�ad�|Y(L3&zˋA�ڛ�Y���|7�;~ܖ���ƕ��i���"��gRp
�w�(�ߊ��Y_�;�����R�A���@Qba���V0���~��K�MI���.Oz+�a\$�@�і���/��G�V���U[�L����9�o��m��)N����닥G�M�2q1v1�$�$�(��ܪ���`U�PH��%�7|�q���h�)$�[�\����^(�f[�<�����i�}|ٽ<� �
y&xݽ����F��KS.�_�R;	�ݹ��0;N���OKo��1
�
�/y]V�ey�P��� ��x%u%��Ӛ�(��Tmt�0��RR�g%"����M�fL���xS�s�y�5`����
x�)~S�����i@䧮��zot�<� <}�s|1*᛭��ڶ�4��󤯅�ku�P/�
Hr5�$��x��g�`F��	�F(P%�,!lY�M�~�n���l�ƿ٦A[aQ��խ��`t��!����-[<�7���_���Vʦ��	��=�x��W_�A5}7V&P`�t,���`�D�� ZY�#pZm�Lv�Ť�b�jr�E��N�)���Q�[ID�\ep
P�O���4xg�F"��������N�.*�Ua�Cy�S��q��Gh�U9�j��n�'k��f�ś�+�|��YO	zճ�lc�	,���X)�ܭ�`�@P7!�.��+�B�<��-�����6�D
�� �)�����&��2�m��V]�D\�c?7����+����8P�c�y(ġ��A3Mn��z�ᇮձ?�U��8z����x<�����`��J�,���'���؝ԟ?FQ�7�~~�      =   �   x�mѱ�0�Z����$e��d�9�&@�\{����ա5֕1v���I�(.�'ŋ��[M�DM�&Q��I�$j5�,"Yd�e��"�E.�`�,�Yh3ڌ6��h3ڌ6��h3ڌ�@[�-��T*��@E�"Q��H<�hK�%�m��BE��PQ�(T*
�P�ߺ����j���lq�Eڍ����s~ ����      <   /  x��ӱn�0���׭]*;$C%*D+ڡ�A\HI��N�x�)CUٓe}��;�(k��Ho��[H�"�:](�mlU�LӦ-*JO���e��� %�ga���8��0���Q���7��d+�sS��%�g�x�X�&�J����1�C�(�1�Fi�lw
��xy�8�YSU�d��$�X,��8/
��x���e��
��6���=0�qi��܎ꋩ�K�=��k�V�~��|�X��f��߾_c
�T���U�Ӈi�ٚ��sd�G�}�7 W���c�y��^=FQ�k��     