---
slug: /bofan/pt621/configuration
id: pt621-configuration
sidebar_label: Configuration
title: Bofan - PT621 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Bofan PT621 para conectar con Plaspy mediante ajustes de servidor y comandos SMS
keywords:
  - Configuración Bofan PT621
  - Configuración PT621 para Plaspy
  - Configuración de servidor PT621
  - Configuración rastreador GPS PT621
  - Comandos SMS Bofan PT621
  - APN y ajustes GPRS PT621
  - Integración de rastreador con Plaspy
  - Configuración plataforma GPS PT621
  - Configuración rastreador de vehículo PT621
  - Configuración rastreador de flota PT621
---

# Bofan - Configuración del PT621

Esta página explica el contexto público de configuración para usar el rastreador Bofan PT621 con Plaspy. Reúne los ajustes de servidor prácticos y los comandos de configuración por SMS disponibles públicamente que suele utilizarse para apuntar un PT621 a Plaspy, de modo que el dispositivo reporte ubicación y eventos a la plataforma.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor, por lo que siga estas instrucciones públicas junto con la documentación oficial de Bofan y las indicaciones de su proveedor.

## Resumen de la configuración

El proceso de configuración prepara un PT621 para comunicarse con la plataforma Plaspy y garantiza que el dispositivo sea visible y reporte correctamente. Para este modelo, el fabricante facilita comandos de configuración por SMS como un método práctico para aplicar los ajustes de servidor y de APN.

- Configure el identificador del dispositivo para que Plaspy pueda asociar los reportes con el activo correcto.
- Aplique el APN del operador y, si corresponde, las credenciales APN para habilitar la conectividad de datos móviles.
- Apunte el rastreador al endpoint del servidor Plaspy para que los informes de posición y eventos se entreguen a la plataforma.
- Defina los intervalos de actualización y el comportamiento de reporte según sus necesidades de monitoreo.
- Verifique que el dispositivo alcance el servidor Plaspy y aparezca en la plataforma para confirmar la conectividad de extremo a extremo.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com como el endpoint canónico usado para el envío de reportes desde los dispositivos.
- IP del servidor 54.85.159.138 como opción numérica explícita cuando se requiere una dirección numérica.
- Puerto 8888, que es el puerto único que usa Plaspy para todos los dispositivos compatibles.
- Soporte de transporte UDP o TCP; el PT621 puede configurarse para usar cualquiera de los dos en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que la plataforma puede procesar reportes de dispositivos compatibles sin mapeo de protocolo por unidad.

## Requisitos típicos antes de la configuración

- Alimentar el PT621 desde la fuente de energía del vehículo y verificar que el dispositivo arranca normalmente.
- Una SIM móvil válida con datos habilitados y capacidad de SMS para poder enviar comandos de configuración por SMS y permitir la conectividad GPRS.
- Tener a mano el número IMEI del dispositivo para la configuración y verificación del identificador.
- Nombre del APN y, opcionalmente, usuario y contraseña APN proporcionados por el operador móvil para habilitar GPRS.
- Acceso al método de configuración del fabricante para esta unidad, como comandos SMS o software del proveedor.
- La contraseña por defecto del dispositivo si se requiere para los comandos; para el PT621 la contraseña pública común en la documentación es 000000.

## Cómo se conecta este rastreador a Plaspy

El PT621 se configura para enviar posiciones, alarmas y telemetría al endpoint y puerto compartidos de Plaspy. Una vez aplicados el APN y los ajustes del servidor, la unidad usará datos móviles para transmitir las actualizaciones a Plaspy, mientras que los SMS quedan disponibles para alertas críticas o configuración remota si es necesario.

- El rastreador envía actualizaciones periódicas de ubicación a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- El transporte puede seleccionarse como UDP o TCP según la configuración del dispositivo y las condiciones de la red.
- Plaspy detecta automáticamente el protocolo del dispositivo e ingiere los reportes de posición y eventos.
- Los identificadores del dispositivo deben coincidir con el ID configurado en Plaspy para que la plataforma asigne los mensajes entrantes al activo correcto.
- Tras una configuración exitosa, la visibilidad del dispositivo y la telemetría aparecerán en Plaspy para monitoreo en tiempo real y reportes históricos.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de Bofan para el PT621, como la interfaz de comandos por SMS o el software recomendado por el proveedor.
2. Ingrese el endpoint del servidor Plaspy como d.plaspy.com o 54.85.159.138 en la opción de servidor.
3. Configure el puerto 8888, que es el puerto común de Plaspy usado por todos los dispositivos.
4. Elija UDP o TCP si el dispositivo requiere selección de transporte y la red local soporta el transporte elegido.
5. Configure el identificador del dispositivo que Plaspy usará para reconocer la unidad, normalmente derivado del IMEI según la guía del fabricante.
6. Aplique o guarde la configuración y reinicie el dispositivo si lo requiere el rastreador o las instrucciones del proveedor.
7. Valide que el dispositivo reporte a Plaspy comprobando la llegada de posiciones y eventos en la plataforma.

## Ejemplos de comandos de configuración

El PT621 soporta configuración por SMS. Los siguientes comandos públicos por SMS se presentan en el orden comúnmente usado. Reemplace los marcadores con los valores específicos de su dispositivo. La contraseña por defecto mostrada a continuación es 000000 y puede ser necesaria como prefijo en cada comando.

- Restauración de fábrica (paso opcional inicial)
```text
000000DFT
```

- Establecer el identificador de 14 dígitos usado con Plaspy
```text
000000GID<14-digit-identifier>
```
Reemplace \<14-digit-identifier> con el identificador de 14 dígitos que desea usar, comúnmente los últimos 14 dígitos del IMEI del dispositivo.

- Configurar el APN del operador móvil
```text
000000APN[apn]
```
O, si se requieren usuario y contraseña del APN:
```text
000000APN[apn],[apnu],[apnp]
```
Mantenga los marcadores [apn], [apnu] y [apnp] y sustitúyalos por el nombre del APN de su operador, el usuario APN y la contraseña APN respectivamente.

- Configurar el servidor GPRS a Plaspy por IP numérica y puerto
```text
000000SVR54.85.159.138,8888
```
Este comando apunta el rastreador al endpoint numérico y puerto del servidor Plaspy.

- Ajustar el intervalo de subida a 60 segundos
```text
000000GTI60
```
Esto establece el intervalo de rastreo en 60 segundos. Ajústelo según la frecuencia de reporte requerida.

Nota: Cada comando SMS normalmente va precedido por la contraseña del dispositivo. Los ejemplos anteriores muestran la contraseña pública por defecto 000000 según la documentación del fabricante. Conserve la contraseña correcta si la ha cambiado.

## Notas sobre la configuración

- La configuración por SMS es una opción documentada para el PT621; muchos instaladores prefieren SMS porque no requiere conectar el dispositivo a una PC.
- Las versiones de firmware y las revisiones de hardware del fabricante pueden cambiar la sintaxis de los comandos y las funciones disponibles; confirme los comandos actuales con la documentación de Bofan si algún comando falla.
- Elija UDP o TCP según la fiabilidad de su red y el comportamiento del operador; UDP es común para rastreo, pero TCP puede ser preferible cuando se necesita entrega garantizada.
- El comando APN acepta los marcadores opcionales de usuario y contraseña [apnu] y [apnp] cuando el operador requiere credenciales.
- El comando de restauración de fábrica es opcional y debe usarse con precaución; realícelo sólo cuando sea necesario durante la provisión inicial o para resolver problemas.

## Por qué usar Plaspy con esta configuración

Usar el PT621 con Plaspy ofrece una vía práctica para integrar la posición del vehículo, las alarmas y la telemetría de sensores en una única plataforma de operación de flotas. Los ajustes de servidor compartidos y la detección automática de protocolos de Plaspy facilitan registrar y comenzar a recibir datos una vez que el APN y los ajustes del servidor estén aplicados en el dispositivo.

Para saber más sobre Plaspy visite https://www.plaspy.com y para detalles específicos del dispositivo consulte el sitio del fabricante Bofan en https://www.bofancloud.com/ para verificar el comportamiento del firmware e instrucciones exactas de configuración.
