---
slug: /thingsys/ytwl_ca100f/configuration
id: ytwl_ca100f-configuration
sidebar_label: Configuration
title: ThingSys - YTWL_CA100F Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del ThingSys YTWL_CA100F para conectarse a Plaspy usando servidor compartido y comandos SMS
keywords:
  - Configuración ThingSys YTWL_CA100F
  - Configuración YTWL CA100F
  - Ajuste servidor YTWL CA100F
  - Configuración Plaspy YTWL CA100F
  - Configuración rastreador Plaspy
  - Configuración rastreador GPS vehículo
  - Configuración limitador de velocidad
  - Configuración GPS GPRS
  - Compatibilidad ThingSys rastreador
  - Configuración dispositivo seguimiento flotas
---

# ThingSys - Configuración del YTWL_CA100F

Esta página documenta el contexto público de configuración para usar el ThingSys YTWL_CA100F con la plataforma de seguimiento Plaspy. El YTWL_CA100F es un rastreador GPS vehicular multifuncional con limitador de velocidad basado en un chip ARM inteligente. Combina el control de velocidad con capacidades profesionales de rastreo GPS y soporta conectividad GSM GPRS. Las instrucciones que siguen se centran en la integración con Plaspy y en los pasos de configuración del fabricante que están disponibles públicamente.

Plaspy utiliza un endpoint y puerto compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos de configuración en el lado del fabricante para este dispositivo pueden variar según la versión de firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. Cuando están disponibles, incluimos los comandos SMS públicos proporcionados para este modelo y orientación práctica para aplicar los ajustes necesarios del servidor Plaspy.

## Resumen de la configuración

Esta configuración prepara el YTWL_CA100F para comunicarse con Plaspy y que el dispositivo reporte posición y datos de forma fiable a la plataforma. Los pasos públicos de puesta en marcha suelen configurar el APN de red, el endpoint y puerto del servidor, el intervalo de reporte y la zona horaria; y pueden realizarse por SMS o con las herramientas del fabricante.

- Configure el APN del dispositivo y las credenciales APN para que los datos GPRS lleguen a Plaspy
- Configure el dispositivo para enviar datos al endpoint y puerto del servidor Plaspy
- Seleccione UDP o TCP si el dispositivo requiere elegir el tipo de transporte
- Establezca el intervalo de reporte y la zona horaria para consistencia en los datos
- Verifique que el rastreador informe en Plaspy y que las actualizaciones de ubicación aparezcan

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y enruta los datos del dispositivo

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos soportados por la plataforma y detectará el protocolo automáticamente.

## Requisitos típicos antes de configurar

- Una tarjeta SIM con datos móviles activos y capacidad de SMS instalada en el rastreador
- Acceso al dispositivo mediante el método de configuración oficial de ThingSys, por ejemplo SMS o software del proveedor
- Nombre del APN y, opcionalmente, usuario y contraseña del APN proporcionados por el operador móvil
- Batería cargada o alimentación continua disponible durante la configuración y las pruebas
- Un método para enviar mensajes SMS al dispositivo desde un teléfono o gateway SMS si se usa la configuración por SMS
- Acceso a la documentación de ThingSys para detalles específicos del firmware

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el YTWL_CA100F usa GSM GPRS para enviar ubicación y datos del dispositivo al endpoint compartido de Plaspy. El dispositivo puede usar transporte TCP o UDP en el puerto único de Plaspy y la plataforma identificará el protocolo de forma automática.

- El dispositivo envía periódicamente actualizaciones de posición y estado por GPRS al servidor configurado
- El rastreador informa al endpoint de Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888
- El transporte puede ser UDP o TCP según lo que seleccione el dispositivo; Plaspy detecta el protocolo automáticamente
- Plaspy recibe los mensajes del dispositivo y muestra ubicaciones y eventos para monitoreo y análisis
- Validar la conectividad garantiza que el rastreador sea visible y activo en la plataforma Plaspy

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial de ThingSys para el YTWL_CA100F, por ejemplo comandos SMS o la herramienta de configuración del proveedor.
2. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o 54.85.159.138 según la interfaz del dispositivo.
3. Establezca el puerto del servidor en 8888.
4. Elija UDP o TCP si el dispositivo requiere la selección del transporte.
5. Configure el APN y las credenciales APN del operador para que los datos GPRS puedan transmitirse.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware o el equipo lo requieren.
7. Verifique que el dispositivo reporte en Plaspy y que las actualizaciones de posición aparezcan en la plataforma.

Si se utiliza la configuración por SMS, siga el formato y el orden de comandos SMS del dispositivo que se muestran a continuación.

## Comandos de configuración de ejemplo

El YTWL_CA100F puede configurarse enviando mensajes SMS al dispositivo. Los siguientes comandos de ejemplo públicos son proporcionados por ThingSys. La contraseña de dispositivo usada en estos ejemplos es 123456, que es la predeterminada. Mantenga los marcadores de posición tal como aparecen al sustituirlos por los valores de su operador.

- Comando opcional de reinicio de fábrica etiquetado aquí como configuración inicial opcional
```text
FACTORY*123456
```

- Establecer la zona horaria del dispositivo a UTC con desfase positivo o negativo
```text
TIMEZONE*123456*+00
```
Explicación: configure la cadena de zona horaria al desfase deseado. El ejemplo establece UTC 0.

- Configurar el APN del operador
```text
APN*123456*{{apn}}
```
Explicación: reemplace {{apn}} por el nombre del APN de su operador móvil.

- Establecer usuario y contraseña del APN
```text
USERNAME*123456*{{apnu}}*{{apnp}}
```
Explicación: reemplace {{apnu}} y {{apnp}} por el usuario y la contraseña del APN si son requeridos. Si el operador no requiere usuario o contraseña, algunos firmwares permiten dejarlos en blanco.

- Configurar la IP y el puerto GPRS al servidor Plaspy
```text
IP*123456*54.85.159.138,8888
```
Explicación: este ejemplo usa la IP y el puerto de Plaspy. Dependiendo del firmware o la herramienta, puede ser posible especificar el dominio d.plaspy.com en lugar de la IP en otras interfaces de configuración.

- Establecer el intervalo de reporte
```text
INTERVAL*123456*060
```
Explicación: el ejemplo establece el intervalo de actualización. Reemplace 060 por el valor de intervalo que su política de flota requiera.

Nota de verificación: la configuración del modelo indica verificar los ajustes para TCP. Si su dispositivo soporta un comando SMS de verificación o consulta, utilice el comando de consulta ThingSys correspondiente para confirmar la configuración de servidor y transporte.

## Notas de configuración

- Los comandos SMS de ejemplo usan la contraseña por defecto del dispositivo 123456. Si la contraseña fue cambiada, use la contraseña actual en los comandos.
- Las revisiones de firmware y hardware pueden cambiar la sintaxis exacta de los SMS o los campos disponibles. Confirme los comandos en la documentación de ThingSys para su versión de firmware.
- El comando IP de ejemplo usa la IP y el puerto del servidor Plaspy según los ajustes públicos de Plaspy. Algunos dispositivos aceptan un nombre de dominio en lugar de una IP en diferentes herramientas de configuración.
- Elija TCP o UDP según la interfaz del dispositivo. Plaspy soporta ambos y detectará el protocolo en uso.
- La configuración por SMS es común para este modelo, pero pueden existir herramientas del fabricante o un cable de configuración para aprovisionamiento masivo o inicial.

## Por qué usar Plaspy con esta configuración

Usar el ThingSys YTWL_CA100F con Plaspy ofrece una forma directa de combinar el hardware de limitador de velocidad con una plataforma centralizada de rastreo GPS y visibilidad de flota. Configurar el APN, el endpoint del servidor, el transporte y los intervalos de reporte garantiza que el dispositivo informe de forma fiable posición y estado a Plaspy, de modo que los equipos operativos puedan monitorear vehículos y responder ante eventos.

Para saber más sobre Plaspy e integraciones soportadas visite https://www.plaspy.com. Para las instrucciones específicas más recientes del dispositivo, notas de firmware e información de soporte del fabricante, verifique los detalles en el sitio oficial de ThingSys https://www.thingsys.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
