---
slug: /globalsat/tr_300v/configuration
id: tr_300v-configuration
sidebar_label: Configuration
title: GlobalSat - TR-300V Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar GlobalSat TR-300V y conectarlo a Plaspy con ajustes de servidor y ejemplos de SMS
keywords:
  - Configuración GlobalSat TR-300V
  - Configuración TR-300V
  - Configuración TR-300V para Plaspy
  - Configuración rastreador GlobalSat
  - Configuración rastreador GPS Plaspy
  - Rastreador personal TR-300V
  - Configuración SMS TR-300V
  - Ajustes de servidor rastreador Plaspy
  - Configuración GPRS rastreador
  - Guía configuración de dispositivo
---

# GlobalSat - TR-300V Configuración

Esta página describe el contexto público de configuración necesario para conectar un rastreador GlobalSat TR-300V a la plataforma de gestión de flotas Plaspy. Se centra en los ajustes de servidor prácticos y en ejemplos de comandos SMS que se utilizan habitualmente para dejar el equipo preparado para comunicarse con Plaspy. La guía se basa en información públicamente disponible y en las plantillas de SMS que suelen incluirse en las notas de configuración del TR-300V.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo alcanza el endpoint de Plaspy. Los pasos del fabricante pueden variar según la versión de firmware, la variante de hardware, el tipo de instalación o las herramientas del proveedor. Cuando procede, esta guía incluye el patrón de configuración por SMS que acepta el TR-300V y explica cómo ensamblar el comando y el checksum para su uso con Plaspy.

## Resumen de la configuración

Preparar un TR-300V para integrarlo con Plaspy implica configurar el dispositivo para que alcance el servidor de Plaspy con los parámetros de red correctos y validar que los reportes lleguen a la plataforma. Los comandos de ejemplo a continuación muestran cómo se puede ajustar el TR-300V mediante SMS, incluyendo marcadores de APN y valores del servidor Plaspy.

- Configure la red del dispositivo y los parámetros APN para que el TR-300V use GPRS y pueda enviar datos a la plataforma.
- Apunte el equipo al endpoint del servidor Plaspy (dominio o IP) y al puerto compartido de Plaspy para que los datos fluyan al destino correcto.
- Seleccione el protocolo de transporte (UDP o TCP) si el dispositivo exige una selección explícita, y guarde la configuración.
- Reinicie o aplique los ajustes para que el rastreador arranque con la nueva configuración de servidor.
- Verifique la conectividad confirmando que el dispositivo aparece y envía actualizaciones a Plaspy.
- Use las plantillas SMS proporcionadas y el mecanismo de checksum para asegurarse de que los comandos sean aceptados por el TR-300V.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo se conecta

Nota: Plaspy usa el mismo puerto para todos los dispositivos compatibles, lo que simplifica la configuración entre distintos modelos de rastreadores.

## Requisitos típicos antes de la configuración

- Un TR-300V con batería cargada y una tarjeta SIM operativa que tenga datos y SMS habilitados cuando se requiera GPRS o configuración por SMS.
- Tener a mano el número IMEI del dispositivo para usarlo en las plantillas de configuración por SMS.
- Acceso al método de configuración aceptado por el fabricante para su variante de dispositivo, como comandos SMS o la herramienta oficial de GlobalSat.
- Cobertura de red 3G en la zona donde operará el TR-300V.
- Permiso para enviar SMS al número del dispositivo y un modo de recibir cualquier respuesta del equipo.

## Cómo se conecta este rastreador a Plaspy

El TR-300V se configura para enviar actualizaciones periódicas de ubicación e informes de eventos al endpoint y puerto compartidos de Plaspy. Una vez que el rastreador alcanza el servidor de Plaspy, la plataforma detecta automáticamente el protocolo y procesa los datos entrantes para visualización y monitoreo.

- El dispositivo reporta al dominio d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.
- La configuración puede usar UDP o TCP según el firmware del equipo y su preferencia.
- Plaspy detecta automáticamente el protocolo del rastreador para que la plataforma interprete los mensajes del TR-300V sin necesidad de seleccionar manualmente el protocolo en Plaspy.
- Tras la configuración, el rastreador envía datos de ubicación y eventos que quedan visibles en la plataforma Plaspy para monitoreo y alertas.
- Una configuración correcta permite a centros de monitoreo y administradores validar el funcionamiento del dispositivo y el envío de eventos en Plaspy.

## Flujo típico de configuración

1. Acceda al método oficial de configuración de GlobalSat para su variante TR-300V, habitualmente comandos SMS o la herramienta del fabricante.
2. Ingrese el endpoint del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 según lo requiera la interfaz del dispositivo o la plantilla SMS.
3. Establezca el puerto en 8888, que es el puerto compartido de Plaspy para todos los dispositivos.
4. Si el dispositivo exige selección de transporte, elija UDP o TCP según la política de red y la capacidad del firmware.
5. Aplique o guarde la configuración en el equipo y envíe los comandos SMS de confirmación que se requieran.
6. Reinicie o haga reboot del dispositivo si es necesario para cargar los nuevos ajustes.
7. Valide que el dispositivo reporte a Plaspy comprobando los mensajes entrantes y la presencia del dispositivo en la plataforma.

## Ejemplos de comandos de configuración

El TR-300V soporta configuración vía SMS. Las siguientes plantillas se derivan de ejemplos públicos de comandos del dispositivo. Reemplace los marcadores con la información de su equipo antes de enviar. El ejemplo usa marcadores como {{imei}}, [apn], [apnu], [apnp] y tokens de checksum que deben calcularse e insertarse.

- Notas sobre los marcadores:
  - {{imei}} — reemplace con el número IMEI del dispositivo.
  - [apn], [apnu], [apnp] — nombre APN, usuario APN y contraseña APN. Proporcione los valores requeridos por su operador móvil.
  - {{checksum}} y {{checksumreeboot}} — checksums hexadecimales de dos dígitos en mayúsculas calculados sobre la cadena de comando que precede al asterisco, como se describe más abajo.

- Prefijo de lote de Plaspy usado en algunos flujos de proveedor:
  - Formato usado por Plaspy TSPRXAB27GHKLMnaicz*U!

- Plantilla principal de configuración
```text
GSS,{{imei}},3,0,D1=[apn],D2=[apnu],D3=[apnp],E0=54.85.159.138,E1=8888,A1=1*{{checksum}}!
```

- Plantilla opcional de reinicio (usar si es necesario reiniciar después de aplicar ajustes)
```text
GSC,{{imei}},3,0,LH*{{checksumreeboot}}!
```

Cálculo del checksum (ejemplo público):
- El checksum del TR-300V se obtiene aplicando XOR sobre los códigos de los caracteres de la cadena de comando que precede al carácter '*' y convirtiendo el resultado a un valor hexadecimal de dos caracteres en mayúsculas. Inserte ese valor hex en lugar de {{checksum}} o {{checksumreeboot}}.
- Calcule el checksum sobre la cadena completa del comando hasta, pero sin incluir, el asterisco. El valor resultante debe tener dos caracteres en hexadecimal y en mayúsculas.

Pasos para ensamblar el comando:
1. Reemplace {{imei}} y los marcadores de APN con los valores reales.
2. Construya la cadena de comando hasta el carácter '*'.
3. Calcule el checksum XOR y conviértalo a una cadena hexadecimal de dos dígitos en mayúsculas.
4. Añada el checksum seguido de '!' y envíe el SMS completo al número del dispositivo.

## Notas de configuración

- El TR-300V admite comandos de configuración por SMS y por GPRS; utilice el método adecuado según su despliegue y el firmware del equipo.
- Las revisiones de firmware y hardware pueden cambiar la sintaxis exacta de los comandos o los campos disponibles. Siempre verifique los formatos de comando con el manual del dispositivo correspondiente a su versión de firmware.
- Elegir UDP o TCP es una opción a nivel de dispositivo; TCP puede ofrecer entrega más fiable en algunas redes mientras que UDP es más liviano. Plaspy acepta ambos transportes en el puerto compartido.
- Las credenciales APN deben coincidir con las del operador móvil. Mantenga los marcadores [apn], [apnu] y [apnp] en las plantillas para poder sustituirlos por los valores del operador.
- Si en su flujo aparece un paso de reinicio, considérelo opcional salvo que las instrucciones del fabricante indiquen que es obligatorio para aplicar los ajustes.

## Por qué usar Plaspy con esta configuración

Configurar el GlobalSat TR-300V para reportar a Plaspy centraliza la visibilidad del dispositivo y el envío de eventos para equipos de monitoreo y personal operativo. Usar el endpoint compartido de Plaspy y el puerto común simplifica la provisión de dispositivos en una flota mixta y permite que Plaspy detecte y analice automáticamente el protocolo del rastreador, reduciendo la complejidad de la configuración en el lado del servidor.

Para obtener más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para instrucciones específicas más recientes, notas de firmware y referencias de comandos, verifique los detalles en el sitio del fabricante https://www.globalsat.com.tw/ ya que el comportamiento y los métodos de configuración del dispositivo pueden cambiar con el tiempo.
