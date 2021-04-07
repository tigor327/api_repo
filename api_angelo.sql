PGDMP     3                    y         
   api_angelo    12.3    12.3 3    F           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            G           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            H           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            I           1262    17497 
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
       public          me    false    202            J           0    0    customers_custid_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.customers_custid_seq OWNED BY public.customers.custid;
          public          me    false    203            �            1259    17662    deliveryTransactions    TABLE     �   CREATE TABLE public."deliveryTransactions" (
    "deliveryTransactionId" smallint NOT NULL,
    date date NOT NULL,
    "grandTotal" integer NOT NULL,
    supid integer,
    "deliveryDate" character varying
);
 *   DROP TABLE public."deliveryTransactions";
       public         heap    postgres    false            �            1259    17754    delivery    SEQUENCE     w   CREATE SEQUENCE public.delivery
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 52000000
    CACHE 1;
    DROP SEQUENCE public.delivery;
       public          postgres    false    211            K           0    0    delivery    SEQUENCE OWNED BY     _   ALTER SEQUENCE public.delivery OWNED BY public."deliveryTransactions"."deliveryTransactionId";
          public          postgres    false    213            �            1259    17514    items    TABLE       CREATE TABLE public.items (
    id integer NOT NULL,
    name character varying(200),
    barcode character varying(15),
    description character varying(1000),
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
       public          postgres    false    205            L           0    0    itemData_id_seq    SEQUENCE OWNED BY     B   ALTER SEQUENCE public."itemData_id_seq" OWNED BY public.items.id;
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
    "grandTotal" integer,
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
       public          postgres    false    208            M           0    0 (   salesTransactions_salesTransactionId_seq    SEQUENCE OWNED BY     {   ALTER SEQUENCE public."salesTransactions_salesTransactionId_seq" OWNED BY public."salesTransactions"."salesTransactionId";
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
       public          postgres    false    207            N           0    0    suppliers_supid_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.suppliers_supid_seq OWNED BY public.suppliers.supid;
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
    public          me    false    202   H=       A          0    17662    deliveryTransactions 
   TABLE DATA           t   COPY public."deliveryTransactions" ("deliveryTransactionId", date, "grandTotal", supid, "deliveryDate") FROM stdin;
    public          postgres    false    211   $B       @          0    17642    itemDeliveries 
   TABLE DATA           ^   COPY public."itemDeliveries" (id, quantity, "deliveryTransactionsId", "subTotal") FROM stdin;
    public          postgres    false    210   AB       ?          0    17627 	   itemSales 
   TABLE DATA           U   COPY public."itemSales" (id, quantity, "salesTransactionId", "subTotal") FROM stdin;
    public          postgres    false    209   ^B       ;          0    17514    items 
   TABLE DATA           e   COPY public.items (id, name, barcode, description, price, quantity, "itemStatus", supid) FROM stdin;
    public          postgres    false    205   {B       >          0    17617    salesTransactions 
   TABLE DATA           _   COPY public."salesTransactions" (custid, date, "grandTotal", "salesTransactionId") FROM stdin;
    public          postgres    false    208   �G       =          0    17525 	   suppliers 
   TABLE DATA           ^   COPY public.suppliers (supid, "supName", "supContact", "supAddress", "supStatus") FROM stdin;
    public          postgres    false    207   �H       O           0    0    customers_custid_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.customers_custid_seq', 113, true);
          public          me    false    203            P           0    0    delivery    SEQUENCE SET     7   SELECT pg_catalog.setval('public.delivery', 53, true);
          public          postgres    false    213            Q           0    0    itemData_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public."itemData_id_seq"', 100, true);
          public          postgres    false    204            R           0    0 (   salesTransactions_salesTransactionId_seq    SEQUENCE SET     Z   SELECT pg_catalog.setval('public."salesTransactions_salesTransactionId_seq"', 168, true);
          public          postgres    false    212            S           0    0    suppliers_supid_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.suppliers_supid_seq', 42, true);
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
       public          postgres    false    207    2734    211            8   �  x���]s�(��O~w����\���W�N&N7ӝ�![X
4H����=�mYNSMS[q$���A
]��+y�*c#��T~N�B�h���Ưnaɭ��lѸ��,��pg���u���P���4O���	F^��	~�!��[x��N.`^h�h�A��3�8����� J^�����ʒ����2
:V�(�'�OW;z���V{r�R
�/.��\[]��P���h=$JRƕ��&��F�	�뛎�LrE���r{Jb{�52��
�@�2A�q��[muJ���{ ��N7���y���-��N\­�+r����.�<�+��nmM�*��Zv��&H�m5�lm�\��(q��do��j�5�ۛ���.p	qe����!��n��}o��m���[[� �-���褜��]
f�)��>ZO��7�ے�Ve	|Ѕ�л��<�D�J�4��J���!����������F�H0�]�(�膮jl���]l��4� ]�n��xwT���o:i��C�
36�`�ΤJrы�պ(��u���nq���m]h���\�e�65j���W��v�6�Z�/��:AJs�!n�\U��|��_���bNicck����9���a dyFn�}���A��S��J{]J�nE�7��Q���6	������ʞ������w��eiV��`	�V��r��T�_��U[��A�\ݶ�D:��8æe��e�V^0h�i5)���،���@7[N&8�D{.2����蓃5Ek�
�6%�<�D�Qf��A�Y��Ҁ��x;���$9�)�ԣ���!�0�����J�_���Z�x|�YL7�Jט�ﶝ{˾/��{�)��t�M��9��y�o:6a�'p�J�|@e����`W1���X?>��)�$�O��I5���O |L鞘@�2��3�#4A�5��1�ss՘� �)8A�G���l�;g?�t�=����	^>�O�ӂ�+h����X5�!�ں�؋X�1scd-��vf��!�dpi��b��0x5�xw*N1	�yy�ctu�}t���_[�.�	��v��?ʍ���B����>ǎ�~�3V��S[�	PⱩO_u4�'q�g�q��|��d��((�.�ꇍ}�SbF��~+ʶ�]$M�r�~����k�y�Y�8�"`U8V���u�9����Ř��y�;|�>���[�����[���������      A      x������ � �      @      x������ � �      ?      x������ � �      ;   8  x��V˒�6<C_��T�(Jb���ĕ�z�u�9���ҤH�9�ק|H�-�TmՊ9������^�a[S��OT뇚�%�?qϭU���˗�t��[ݛ{Ͻ��n���+�6�+S��x^��Z�7���lq(ԏ�Aq)��^�[�^�M�+��&߫GC%Y�kwnmP��/�4�6�Z���Y�|���6Եѡ��K!���b5����Mt�ڊ�>4x2�u(=N�T&�iѷg�=�?C�ە�n��b�>�K�&�`ș�Gr������FZ��m����ސ��+��&�8��X�mkuc"�]�/l�K�n:�H˧�l]��p
�h��Зܱo��m�Z���(�r�{��!��
��]���B�S,0׫�p�v"�!8sdp�����y�kP�S#��zrUh�����-�.8��"B��À�qe�H���� �=b�(�>�	- �3�f�DbTRe��H�J����\~fKz��l�gH�տqO�bԶ���Z��%S�It�jŵ�~QlԳ�=�ԏlY�sd˳�_2�*�l��2[g��$Z:�M����,�J�!ga���?9s���+���Шh�XEo�A7 ���L���(�G�c�6h8r�(=�J��h�AV�gɋC���Z}	u��4YA�����?��5��=K�E����I?j���r�?��;��ą=X0~��O�қ9B�J�+T.��f�]�H4��eF�p"J���p4T�D�i�1ѧ�!���"<��m������3r#q��b�!�8�c1D��~���3!�ت�3]�I�ߪ���/�w�k�)Ƣ�_)�� �Dw�<�I�dV�>�92[ �>��J��JOL�Ze��*�
�/�)�~��!2d�ۢr����:�h�7!;[2���GD�I1|��;���s�&��fEhhX��HȊ~%�V��M01�i�9n�"��
Řh]�S�ӍP��� �p�M�6�n
�9��ۂq��8�փ5��hk��J�t5�9�4����Vn�]/��zh��?�l�M�e�fc"I�s�^#�����;㦜8� /�wh�g�+�SV����R�Jf��A�I�� ��@s.cXS��zC��\���zXU�ڔ%�|��,C1��iF<f�4��݇�0s=����ɍ�ֺЙK�p�-yf�������Q��nF�"��
A�?�_+rj�]�M����G�{N� �_����$�����N@����=��-^
Z� ���=A"�.ŊZ����6�<�-p�������5>H����C��2��|��Z�~g����T���b�H�k�^_��G�KV�q��j�+R�gm6��#����U��b��ͭ      >   �   x�m���0E��f�����L��砀��ھ�H���u��X���Mo��bR�ŝ�X�(�"��DE�"Q��HT$*Ɉ$#��P2RɈ%#��`2�Ɉ&C��&�	mB��&�	mB��&�9�m�6G���Q�pT8*��@E��m��@[��Ľ�{�&�Mܛ�7��w�X��w������lݚ�������t.S�xP�%v{L*���ŝ⤸~����S$�X�ϸ��α�^u5��lǵ�vL�;m      =   �  x�}V�n#9<��"O�]``�ţ,���vk-����-q]b	��ݚ�ߠ�R�4���b03"2��]��k�e��ч�8cF��R�L�,}�;���g����;�f�S��ɧE�-�C~����u� ���U��o�9I�[�\Xfw5ͺ<�e�i���T���*�0����O��ߦ8D\q�Ms���5qc����&�5N�4�E��}Ʊ��CH�o�c�"-Ym�
�.�t]C7�m��lK�>�(��K{r�Pĵ֌ۚ&���'����,���0:-�!�Y�S�)�4��f�9�:����@�m\�F���Te��Z��׊."�v9(2w}�� ��y!��ͧ&d:Ͼ��k´�"Ƒ��bJY����	�I�@ ^1HIw��rXKp�	�9tu(q�@Wm�f��R���k}�`3)�����Օ&�Y�53Z����D�!g��U�`�]۬���/Vo>%j2�2�1k9�,1��%���p�������RR }�b��=9?^�g �$m�fZҗ�@��~���[?�������k߶S���l}�t{�(�)u��WpUL))�äL�e����}���|O��v���暤�0g��1�'G�p}����	8�Ha,��۵o���l�*v�\�o�/F�v�O��?M�i�����eL.��0x��1���W�ɷ�R5�5L���S�9�8�b
�5��<����c��Oo����+d�$�+q������۴��'�����9�g#o�5��D9&&%Ó�(�g0��X_p����1k���m*z�A>���k���
U$�����
�O��7�ڷ'%{�M����|X��U��PHg5�[�~�B�Ic~�O~��p��(���5gJ��ߍ��u�$� ֕�a�Ji&%�=|�=p���X��*.�qM`�s� �S`Aa���ar�����7G �b!b�5��%��eE�9N�S;R�fwq���=CX@��*�W^8�%�Z��N0\�bnȆ�YIr�=E?�EM
\�k�h�8)q������<+���?�=�-~�)��x���jr����8�OC^r6����w/��#��6�^�.�;�m�Mϧt���a���q?֕�YH�ߵ�>��Q�d%`rE�K�����!�UL
�P	R�KX�'Ũ��/����%G)��h(\;|ѕA7��8\��M�`xc�C˕ŀ`K=�`ǖL��ʞa_>}��ۨ�Q#�eIdIWX��@��$��ex |�2]���k��2�{�<R��&���|��?d�.���8������8lU�f*������B:6��.4븯a$�
M9�i��ͽϻ�gX�.��ē�U�e���F�_�]?��E�8�w�b�t�LE�J�jˬ��x�^��>���`����}���-W�+�C�?�&�e,�l�o7�6����`Ûg1�'M��_��{��ݻ��?�     