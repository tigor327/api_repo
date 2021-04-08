PGDMP         $                y         
   api_angelo    12.3    12.3 5    F           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            G           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            H           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            I           1262    17497 
   api_angelo    DATABASE     �   CREATE DATABASE api_angelo WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';
    DROP DATABASE api_angelo;
                me    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                postgres    false            J           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   postgres    false    3            �            1259    17498 	   customers    TABLE     �   CREATE TABLE public.customers (
    custid integer NOT NULL,
    "custName" character varying(100),
    "custContact" character varying(200),
    "custAddress" character varying(300),
    "custStatus" character varying(10)
);
    DROP TABLE public.customers;
       public         heap    me    false    3            �            1259    17504    customers_custid_seq    SEQUENCE     �   CREATE SEQUENCE public.customers_custid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.customers_custid_seq;
       public          me    false    3    202            K           0    0    customers_custid_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.customers_custid_seq OWNED BY public.customers.custid;
          public          me    false    203            �            1259    17662    deliveryTransactions    TABLE     �   CREATE TABLE public."deliveryTransactions" (
    "deliveryTransactionId" smallint NOT NULL,
    date date NOT NULL,
    "grandTotal" integer NOT NULL,
    supid integer,
    "deliveryDate" character varying
);
 *   DROP TABLE public."deliveryTransactions";
       public         heap    postgres    false    3            �            1259    17754    delivery    SEQUENCE     w   CREATE SEQUENCE public.delivery
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 52000000
    CACHE 1;
    DROP SEQUENCE public.delivery;
       public          postgres    false    3    211            L           0    0    delivery    SEQUENCE OWNED BY     _   ALTER SEQUENCE public.delivery OWNED BY public."deliveryTransactions"."deliveryTransactionId";
          public          postgres    false    213            �            1259    17514    items    TABLE       CREATE TABLE public.items (
    id integer NOT NULL,
    name character varying(200),
    barcode character varying(32),
    description character varying(1000),
    price integer,
    quantity integer,
    "itemStatus" character varying,
    supid integer
);
    DROP TABLE public.items;
       public         heap    postgres    false    3            �            1259    17512    itemData_id_seq    SEQUENCE     �   CREATE SEQUENCE public."itemData_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."itemData_id_seq";
       public          postgres    false    3    205            M           0    0    itemData_id_seq    SEQUENCE OWNED BY     B   ALTER SEQUENCE public."itemData_id_seq" OWNED BY public.items.id;
          public          postgres    false    204            �            1259    17642    itemDeliveries    TABLE     �   CREATE TABLE public."itemDeliveries" (
    id integer NOT NULL,
    quantity integer NOT NULL,
    "deliveryTransactionsId" integer NOT NULL,
    "subTotal" integer NOT NULL
);
 $   DROP TABLE public."itemDeliveries";
       public         heap    postgres    false    3            �            1259    17627 	   itemSales    TABLE     �   CREATE TABLE public."itemSales" (
    id integer NOT NULL,
    quantity integer NOT NULL,
    "salesTransactionId" integer NOT NULL,
    "subTotal" integer NOT NULL
);
    DROP TABLE public."itemSales";
       public         heap    postgres    false    3            �            1259    17617    salesTransactions    TABLE     �   CREATE TABLE public."salesTransactions" (
    custid integer NOT NULL,
    date date,
    "grandTotal" integer,
    "salesTransactionId" smallint NOT NULL
);
 '   DROP TABLE public."salesTransactions";
       public         heap    postgres    false    3            �            1259    17719 (   salesTransactions_salesTransactionId_seq    SEQUENCE     �   CREATE SEQUENCE public."salesTransactions_salesTransactionId_seq"
    AS smallint
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 A   DROP SEQUENCE public."salesTransactions_salesTransactionId_seq";
       public          postgres    false    208    3            N           0    0 (   salesTransactions_salesTransactionId_seq    SEQUENCE OWNED BY     {   ALTER SEQUENCE public."salesTransactions_salesTransactionId_seq" OWNED BY public."salesTransactions"."salesTransactionId";
          public          postgres    false    212            �            1259    17525 	   suppliers    TABLE     �   CREATE TABLE public.suppliers (
    supid integer NOT NULL,
    "supName" character varying(100),
    "supContact" character varying(30),
    "supAddress" character varying(200),
    "supStatus" character varying(15)
);
    DROP TABLE public.suppliers;
       public         heap    postgres    false    3            �            1259    17523    suppliers_supid_seq    SEQUENCE     �   CREATE SEQUENCE public.suppliers_supid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.suppliers_supid_seq;
       public          postgres    false    3    207            O           0    0    suppliers_supid_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.suppliers_supid_seq OWNED BY public.suppliers.supid;
          public          postgres    false    206            �
           2604    17792    customers custid    DEFAULT     t   ALTER TABLE ONLY public.customers ALTER COLUMN custid SET DEFAULT nextval('public.customers_custid_seq'::regclass);
 ?   ALTER TABLE public.customers ALTER COLUMN custid DROP DEFAULT;
       public          me    false    203    202            �
           2604    17757 *   deliveryTransactions deliveryTransactionId    DEFAULT     �   ALTER TABLE ONLY public."deliveryTransactions" ALTER COLUMN "deliveryTransactionId" SET DEFAULT nextval('public.delivery'::regclass);
 ]   ALTER TABLE public."deliveryTransactions" ALTER COLUMN "deliveryTransactionId" DROP DEFAULT;
       public          postgres    false    213    211            �
           2604    17517    items id    DEFAULT     i   ALTER TABLE ONLY public.items ALTER COLUMN id SET DEFAULT nextval('public."itemData_id_seq"'::regclass);
 7   ALTER TABLE public.items ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    204    205    205            �
           2604    17721 $   salesTransactions salesTransactionId    DEFAULT     �   ALTER TABLE ONLY public."salesTransactions" ALTER COLUMN "salesTransactionId" SET DEFAULT nextval('public."salesTransactions_salesTransactionId_seq"'::regclass);
 W   ALTER TABLE public."salesTransactions" ALTER COLUMN "salesTransactionId" DROP DEFAULT;
       public          postgres    false    212    208            �
           2604    17528    suppliers supid    DEFAULT     r   ALTER TABLE ONLY public.suppliers ALTER COLUMN supid SET DEFAULT nextval('public.suppliers_supid_seq'::regclass);
 >   ALTER TABLE public.suppliers ALTER COLUMN supid DROP DEFAULT;
       public          postgres    false    207    206    207            8          0    17498 	   customers 
   TABLE DATA           c   COPY public.customers (custid, "custName", "custContact", "custAddress", "custStatus") FROM stdin;
    public          me    false    202   �>       A          0    17662    deliveryTransactions 
   TABLE DATA           t   COPY public."deliveryTransactions" ("deliveryTransactionId", date, "grandTotal", supid, "deliveryDate") FROM stdin;
    public          postgres    false    211   
D       @          0    17642    itemDeliveries 
   TABLE DATA           ^   COPY public."itemDeliveries" (id, quantity, "deliveryTransactionsId", "subTotal") FROM stdin;
    public          postgres    false    210   pD       ?          0    17627 	   itemSales 
   TABLE DATA           U   COPY public."itemSales" (id, quantity, "salesTransactionId", "subTotal") FROM stdin;
    public          postgres    false    209   �D       ;          0    17514    items 
   TABLE DATA           e   COPY public.items (id, name, barcode, description, price, quantity, "itemStatus", supid) FROM stdin;
    public          postgres    false    205   �D       >          0    17617    salesTransactions 
   TABLE DATA           _   COPY public."salesTransactions" (custid, date, "grandTotal", "salesTransactionId") FROM stdin;
    public          postgres    false    208   KL       =          0    17525 	   suppliers 
   TABLE DATA           ^   COPY public.suppliers (supid, "supName", "supContact", "supAddress", "supStatus") FROM stdin;
    public          postgres    false    207   WM       P           0    0    customers_custid_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.customers_custid_seq', 116, true);
          public          me    false    203            Q           0    0    delivery    SEQUENCE SET     7   SELECT pg_catalog.setval('public.delivery', 63, true);
          public          postgres    false    213            R           0    0    itemData_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public."itemData_id_seq"', 124, true);
          public          postgres    false    204            S           0    0 (   salesTransactions_salesTransactionId_seq    SEQUENCE SET     Z   SELECT pg_catalog.setval('public."salesTransactions_salesTransactionId_seq"', 168, true);
          public          postgres    false    212            T           0    0    suppliers_supid_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.suppliers_supid_seq', 46, true);
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
       public          postgres    false    202    2728    208            �
           2606    17758 %   itemDeliveries deliveryTransactionsId    FK CONSTRAINT     �   ALTER TABLE ONLY public."itemDeliveries"
    ADD CONSTRAINT "deliveryTransactionsId" FOREIGN KEY ("deliveryTransactionsId") REFERENCES public."deliveryTransactions"("deliveryTransactionId") ON DELETE CASCADE;
 S   ALTER TABLE ONLY public."itemDeliveries" DROP CONSTRAINT "deliveryTransactionsId";
       public          postgres    false    210    2738    211            �
           2606    17732    itemSales id    FK CONSTRAINT     z   ALTER TABLE ONLY public."itemSales"
    ADD CONSTRAINT id FOREIGN KEY (id) REFERENCES public.items(id) ON DELETE CASCADE;
 8   ALTER TABLE ONLY public."itemSales" DROP CONSTRAINT id;
       public          postgres    false    205    2730    209            �
           2606    17763    itemDeliveries id    FK CONSTRAINT        ALTER TABLE ONLY public."itemDeliveries"
    ADD CONSTRAINT id FOREIGN KEY (id) REFERENCES public.items(id) ON DELETE CASCADE;
 =   ALTER TABLE ONLY public."itemDeliveries" DROP CONSTRAINT id;
       public          postgres    false    2730    205    210            �
           2606    17737    itemSales salesTransactionId    FK CONSTRAINT     �   ALTER TABLE ONLY public."itemSales"
    ADD CONSTRAINT "salesTransactionId" FOREIGN KEY ("salesTransactionId") REFERENCES public."salesTransactions"("salesTransactionId") ON DELETE CASCADE;
 J   ALTER TABLE ONLY public."itemSales" DROP CONSTRAINT "salesTransactionId";
       public          postgres    false    2736    209    208            �
           2606    17687    items supid    FK CONSTRAINT     o   ALTER TABLE ONLY public.items
    ADD CONSTRAINT supid FOREIGN KEY (supid) REFERENCES public.suppliers(supid);
 5   ALTER TABLE ONLY public.items DROP CONSTRAINT supid;
       public          postgres    false    2734    205    207            �
           2606    17793    deliveryTransactions supid    FK CONSTRAINT     �   ALTER TABLE ONLY public."deliveryTransactions"
    ADD CONSTRAINT supid FOREIGN KEY (supid) REFERENCES public.suppliers(supid) ON DELETE CASCADE;
 F   ALTER TABLE ONLY public."deliveryTransactions" DROP CONSTRAINT supid;
       public          postgres    false    207    2734    211            8     x���Aw�6��ȯ�m�eO$%�:�ݚ�I��8]^�vaLڢ-�%��~�@ٖ�4�Kf+�H| M ���+��ʒ[i�MV��q*�L�&���hg�ܩ-Lf�}4g9��{�"o�u�-�M��9I�D0� ə`�o�6�kr����N��LK�E>+W�9ӌ�4@�;��V/�`��0)�p�B�+%�D�����ga)|P�\Y������!7FU�#C
wf�������:�ƇJf�	�[�HQ&yA��=���~�22��
�@�e�$�x�zMuJ��[�'�~}��d�<�떯��p�܂\��F下"��d���&ו�v%;޺�)�	L��|5�y���4���VhF.3������&�;= 3��%�-(3xL��a�p�N��	;�����z 	�5m@'�GwyJ0qM����=��dڄ�%�����JU�w{g*�L��"/
���Q�3��S�7�n���2�����)B��1�z)���p�T�M�/�IpP���� ħ�f

[]�I�6}��J=��`�Hr�)��e����%���t�a�Z��R	�j���Rר�cH�U�U}���a�ZUK�-4[�!Hi�8�m��V�>�$𛲵5�S�Иڠ#1zNhZp�0 �<#�~]�<Zի>pr
�}X(� ���E�h��t0�����z�S��z-�Z�C��v[�e��� 	�V��|��T�_��E���{��jY�m]�"����B��yoy��U�U�T��c3�s���l�;��P��s�ᅿh�>�KS�֨�S�z"O3�FJ/T�;������j|�e�n��񔂚�����!�0��̓\B��/P��]�c��0���\����6���Ƃ�_�M3�a��z̩�֑��ل<��xP:t�*�iצ�݉��0n: (|mCR$I_��'��d�|�;`�H����&�H�J��b?�0W����#${B���):¦?�#p�#<B���#�x����B���5h����xjM޵u���|�̍�5k��Dk<��Ē���sÝ�������*N1	a=���\�l�]���r��T:&>Q`�ݵ��ܠ��t2�.ht���S�����o1��� %�M]���n6��=ͱۄXÎUW���e̗�ac��Q<&�����\[�$M�j�i����{�y�Ý��1��X,Ł6'�^ؕ!Z?l�>���,z�s����ݿ�� }���K�8����MiӖ�*�O��E ����6����?b�h@�Õ%�V�u|�yԹ
��?��r���?�����Z��      A   V   x��ʱ�0D�:�%���!d�TT(��U$���_/<L3<�� �|�e詵�w� �$b���+�w7�`�2���x�o=���s�Sx      @   (   x�340�440�43Q\�&��FH\��1�,����� H	�      ?      x������ � �      ;   v  x��Wْ�|��~�)Q"�O�=����><������Dؼ �m���C�3vX1��x��2��$e7�0�_�Rh�����(Yl�x�[v/d&ka�.�:����/~��}�w���)�m�񏫜�]Y
ޕV�L�H���`�lx����YS窒��*<���,V�e��)��Jr#q埝�͊�泫̪�dQ�H}����E��jq�I����:��� �ٻ�QY!y��Z��0f�ekx�Լ֢��+����ie.9UY�[�������3�j�n�%E��Z�g��,��U�]�$�ZS:G�*x.Z�#0\�)^�~�z���b�l��-W�fX�ʲdFV�����yWڝF!��Nӝ�,\�G�� .t�Hx\wV�� �١��:�1[��c%�J �VQ���s��X��^��UK��ׅ�U�����WF�`�t�K����E])%���s��"ٓ0�^�{U+���uVpwRI��p��ȏb�J\�u%�j��i�������֌�?hqT� TW�Ii�Q�v�d�#�2%�Ah�-Bb�3���vJg��JT�a�0�95���+<+-)�����Ǯl;+���ok�+�c�Z#�]��,҈}��@��a~�K�l� �$� ��A*������)|n�����`9Q.��v���`h��\�+��[��*B�	�UB\q�b��InUp��D���CJʃ�d��B(H�#9��JK�4��+�g@�E�fׅ<j59�v�����]��=.Nw�j������;($jz���* @.�ML�Ƴ%�L���=S��҃ R�d�&���(eO�2��N��?8��Y�6ǜ�⾦�l�l�N�Lv���`C�19E�yy[���*q��GkM���0=��Ț�Kֵ�35A�rp�V�
(��{���D�35����mL'5���T���6��Ѵ&kDɃmS���δ�r]n,0Pg����!���#��5����.q���b��"ݰ�F���Q�l��t��Hd�}��V��^���H;ä��� ϛf��g�3��W@�64���o��MO?��@�/�YGQ�Nz��b]����U���2(�4L�$,jӔ��ec��t���do��G5�S�(����[z�Ā���As��Rä�f-	��[��ꟚS.5��~��h��Q����0>O%�Ց����?v@��M�K�MA#�@���H�	0������'�6�|)�*�?Ɋ��n
'A�`d���[��5��B��8�X��A�^������W��Z7�m6i�}V��oË�Z��0���تI�p��
6��lDn��i��F�ۑ��\Y��4�5�00a��E�\��b�+�W᯦�~H����;C{V�n^���ؙ�58�&7�����	�j�N�=Im�cK^�r[`����?� �������SW�e�����'K�ܗ�N�l����0H�����I�J�,��M���F
Y���Tb�a?JQZl�Kؿ޾��>����, {ELQ54��
�#ֹ��1���Wظ�a?�~�:���p,e�`OqjJ7{��.���?���\�t^N ���9�҇͊\!6}B�"��~~�8\�wjFp�ϭ{�Q�����[��?�!T:��B4
�MCзƾ�	�Y!v��bw������{��&�6�6��̗�lV�v��]��]��y|��v*�3�'h��h��t�k_�4YH�n@���9"x������o�w���)Z�z�ޜ�[�ϛ%Th�"7�ѡ��A�0ɵ8��S*C�(M|��<p�w�m�$�x/
�׳B#�]0��N�$D��*F{.���*���(�z�������LZ�a����]��z�A9� ���V����O|�sc%;����?�����b�8ǜ�      >   �   x�m���0E��f�����L��砀��ھ�H���u��X���Mo��bR�ŝ�X�(�"��DE�"Q��HT$*Ɉ$#��P2RɈ%#��`2�Ɉ&C��&�	mB��&�	mB��&�9�m�6G���Q�pT8*��@E��m��@[��Ľ�{�&�Mܛ�7��w�X��w������lݚ�������t.S�xP�%v{L*���ŝ⤸~����S$�X�ϸ��α�^u5��lǵ�vL�;m      =   2  x�}V]o";}���z�J�Q����snBؐ�x��o�n�n�a����WWB�(v��S�J���j�v}"�ig�AZ[*�)���~G3�ul���s� �l:����f}M��"tt����w���*��sN��$��]I�6�~h�nS���v��5b���w��7��6��x�r�T�iNF�ču�����ָA��u8������B����ii�j+X��H߷�K�Vt��pݰ�:��@B��m��E\k͸-i�).|C�nu��e�ӛ�ےRZ�u\1E�)6Go��1E$�D����%�p׹� UX��Ԭॢ�H�m
=�Lm��fy��8�Is��*$'�E�5bڂ��YY0���{U�|5�@�	qx�@%=�=���a)��6$,���!ž�]�a�hr�Cή<�Y��7!u'�G�,4	��J��Ѣ,�ֿ4�R򋷬�j�j��~��k�)Q�)���Yˑd�
�͠<.Y��|���gtU�?rJu@�$�������=c�H�Vj�%}��:�W�o����c
�����h��u=����ױ߁��T���K�z��(�"e�a�Q�l��4�f�|�>?�����C�LsMR荂3Nc���U�n�WTӳ��$�H@#��P䣯׾Z�j���*7�m��X�M>eҮ7���4�_
�F�69o�CǄ�!^�F�s�̖��NI��4�M ��%�����[�M����=�Y+d�$�q�菸���f��� �`��1�{#m�%�sG9&a&)C�Ց�	� �_t�W���$�u��c�(E�m��ȍ|�S!ط��_;$�,@�2�����~��Z���oJ��8�uG�a�gW@'B�A����v�c;��j��|�[ć�H�E	C.9S�&P��m��M'&t`]N"-�fR�é�1 �ood	sp_��Ø8�q����N�6�o�UH5��Z_�,��5BQ����Y�)��v�еG̕�..Rۄ~D�h�j�#/3A	��p!1�"������'��O��"�&,��%s4��d��[rf�~�����mGw�?b�d�xJc��0�R��[�cg>5y��,�Rw4n_B�Z��0�m7�t�����y7O�.����6���>ƕ�Yh�nW?�U	EJ�&�V�);�G��� ��SЇJ8�Jwm�Ay"u���T��H�@�K�mn��B��l�k���;9�\X4���fl������������F��,�#K�Ĩ�z:��t'�$-��MX"�n�W��%w�<\�A&����~�:^d�.��r�c��3&�_e���a���y�AH�F1݅
d�B� ��k�FM����iw����W�O4�]A\���h����u�?�y�.�yB�B(S��Bi�U1ڗ}��f�c6���]�Oǖ����i��o�)���0��%��_��?�۸��t����-��q�y��m
�X7����|4����j,Ay�_��" ��y�pp�y�Ul}�qR��?�*2x���1�}ZwxD� 8\����d�0��1�)�o7�:�i^@��-��sTU�`���>|��X�~�     