---
slug: /topshine/pt20/configuration
id: pt20-configuration
sidebar_label: Configuration
title: TopShine - PT20 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el TopShine PT20 con Plaspy para seguimiento en tiempo real
keywords:
  - configuración TopShine PT20
  - instalación TopShine PT20
  - configuración PT20 Plaspy
  - ajustes servidor PT20
  - configuración rastreador PT20
  - configuración GPS TopShine
  - configuración plataforma PT20
  - configuración rastreadores Plaspy
  - configuración SMS PT20
  - ajustes APN PT20
---

# TopShine - Configuración PT20

Esta página documenta el contexto público de configuración para usar el rastreador TopShine PT20 con la plataforma Plaspy. Compila los ajustes de servidor prácticos y los comandos SMS del fabricante que se usan comúnmente para apuntar el PT20 a Plaspy y permitir el seguimiento en tiempo real y la ingestión de telemetría. Use estas indicaciones junto con la documentación del producto PT20 y las instrucciones del proveedor.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador al recibir paquetes. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; por ello considere los comandos aquí como ejemplos públicos y consulte con el proveedor cuando sea necesario.

## Resumen de la configuración

El objetivo del proceso de configuración es preparar el PT20 para que comunique de forma fiable datos de posición y alarmas a Plaspy. Normalmente esto implica configurar la identidad del dispositivo, el APN para datos móviles y el endpoint del servidor de seguimiento para que el PT20 pueda subir telemetría a través de la red celular.

- Establecer el identificador del dispositivo y verificar el IMEI para que Plaspy pueda asociar los paquetes entrantes con la unidad correcta.
- Configurar el APN del operador móvil para que el rastreador use datos GPRS/4G y alcance Plaspy.
- Apuntar el rastreador al endpoint y puerto del servidor compartido de Plaspy para que los datos de ubicación se entreguen a su cuenta.
- Validar el transporte y la conectividad para que el dispositivo aparezca en Plaspy y reporte actualizaciones en el intervalo esperado.
- Confirmar el reporte del dispositivo en Plaspy después de aplicar los ajustes para asegurar visibilidad y notificación de eventos.

## Ajustes de servidor de Plaspy

Use los siguientes ajustes públicos de servidor de Plaspy al configurar el PT20:

- dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- puerto 8888
- transporte: soporte para UDP o TCP (el dispositivo puede configurarse en UDP o TCP en el puerto 8888)
- detección automática de protocolo en Plaspy

Nota: Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando llegan los paquetes.

## Requisitos típicos antes de la configuración

- Una unidad PT20 cargada con acceso a su método de configuración del fabricante (los comandos SMS son de uso común).
- Una tarjeta SIM válida instalada con un plan de datos activo y los valores APN del operador disponibles.
- Acceso al IMEI del dispositivo y la contraseña básica si es necesaria para comandos SMS (los ejemplos de comandos del fabricante más abajo usan la contraseña por defecto indicada).
- Un lugar estable para probar la conectividad donde el dispositivo obtenga señal celular para el registro inicial y la subida de datos.
- Una cuenta en Plaspy y conocimiento básico de cómo su instancia organiza dispositivos para verificar el equipo tras la configuración.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el PT20 sube paquetes de posición y alarma al endpoint y puerto compartido de Plaspy para que los datos de ubicación y eventos sean visibles en la plataforma. Plaspy recibe los paquetes, detecta automáticamente el protocolo y asocia los mensajes con el registro del dispositivo.

- El rastreador envía ubicación y telemetría a la red celular hacia el endpoint del servidor de Plaspy.
- Los paquetes se dirigen al servidor compartido de Plaspy (d.plaspy.com o 54.85.159.138) en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador y procesa los mensajes entrantes para el dispositivo configurado.
- Los eventos y posiciones reportados se muestran en los paneles y herramientas de Plaspy para monitoreo y consultas históricas.
- Los datos almacenados en buffer por el PT20 durante cortes temporales se reenvían a Plaspy cuando se restablece la conectividad.

## Flujo común de configuración

1. Acceda al método oficial de configuración del fabricante o al software (los comandos SMS son de uso común para el PT20).
2. Recupere el IMEI del dispositivo y confirme la contraseña si se requiere.
3. Ingrese el host del servidor Plaspy (d.plaspy.com) o la IP del servidor Plaspy (54.85.159.138) en la configuración de servidor del dispositivo.
4. Configure el puerto del servidor en 8888 (Plaspy usa el mismo puerto para todos los dispositivos).
5. Elija UDP o TCP si el PT20 solicita seleccionar transporte; escoja el que se adecúe a su instalación.
6. Configure el APN del operador y cualquier nombre de usuario o contraseña de APN que requiera la SIM.
7. Aplique o guarde la configuración y reinicie el dispositivo si el fabricante lo exige.
8. Verifique que el dispositivo reporte a Plaspy y que aparezca en su cuenta con las actualizaciones esperadas.

## Comandos de configuración de ejemplo

El PT20 puede configurarse por SMS usando los comandos del fabricante que se muestran a continuación. Los comandos de ejemplo usan la contraseña del dispositivo 000000 por defecto. Reemplace los marcadores y valores con los dígitos reales del IMEI, los valores APN u otros datos requeridos por su operador.

Nota: Los comandos siguientes son ejemplos públicos proporcionados por la documentación del dispositivo. Envíe cada SMS al número del dispositivo desde un teléfono autorizado por la configuración del equipo.

1. Reinicio opcional a configuración de fábrica (use solo si necesita restaurar valores predeterminados)
```
W000000,990,099###
```

2. Establecer el ID del dispositivo (use los primeros 14 dígitos del IMEI)
- Reemplace \<14_DIGITS_FROM_IMEI> con los primeros 14 dígitos del IMEI del dispositivo.
```
W000000,010,<14_DIGITS_FROM_IMEI>
```
Nota del fabricante: establezca el Id del dispositivo usando los primeros 14 números del IMEI. Plaspy utiliza como id los 15 dígitos del IMEI.

3. Configurar el APN del operador
- Reemplace [apn] por el APN de su operador.
- Si es necesario, incluya nombre de usuario y contraseña del APN añadiendo ,[apnu],[apnp] después del APN.
```
W000000,011,[apn]{{,[apnu],[apnp]}}
```
Explicación: [apn] es el nombre del APN para la SIM. [apnu] y [apnp] son marcadores opcionales para usuario y contraseña del APN; inclúyalos solo si su operador los requiere.

4. Establecer el servidor GPRS a Plaspy usando la IP pública y puerto
```
W000000,012,54.85.159.138,8888
```

5. Cambiar a modo GPRS (activar modo de datos)
```
W000000,013,2
```

6. Establecer el intervalo de actualización de posición
- Reemplace 6 por el código de intervalo requerido por su despliegue si es diferente.
```
W000000,014,6
```

7. Consultar IMEI del dispositivo (comando de verificación)
```
W000000,601
```

Siga la guía del fabricante para la sintaxis de comandos, tiempos entre mensajes SMS y cualquier respuesta de confirmación requerida. Si un comando requiere un formato alterno para introducir nombres de dominio, puede usar d.plaspy.com en lugar de la IP en el paso 4 si el dispositivo soporta DNS.

## Notas de configuración

- Las variaciones de firmware y región pueden cambiar formatos exactos de comandos SMS y parámetros disponibles; confirme la sintaxis precisa con la documentación del PT20 o el proveedor.
- El PT20 soporta configuración vía SMS como se muestra; si existe software del proveedor o una herramienta de configuración, prefiera la herramienta oficial para despliegues masivos.
- Elija UDP o TCP según sus necesidades de red; Plaspy acepta cualquiera de los dos en el puerto compartido 8888 y detecta el protocolo automáticamente.
- Asegúrese de que los valores APN sean correctos para la SIM en uso; la ausencia de APN es una causa común de fallas en la conectividad GPRS.
- Tras aplicar los ajustes de servidor y APN, valide la conectividad comprobando que Plaspy reciba datos y que el dispositivo aparezca en línea en su instancia de Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el TopShine PT20 con Plaspy ofrece a las organizaciones una manera práctica de recopilar datos de ubicación y eventos en tiempo real desde rastreadores portátiles o encubiertos. Apuntar el PT20 al endpoint y puerto compartido de Plaspy permite visibilidad inmediata de la posición del dispositivo, alertas de eventos y recorridos históricos en una sola plataforma para monitoreo y toma de decisiones operativas.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device specific configuration methods and firmware behavior with the manufacturer at https://www.gztopshine.com/ . Manufacturer specifications and setup steps can change over time, so confirm current instructions on the official TopShine site before large scale deployment.
