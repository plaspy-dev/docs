---
slug: /gator/m508/configuration
id: m508-configuration
sidebar_label: Configuration
title: Gator - M508 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Gator M508 con ajustes de servidor Plaspy y ejemplos de comandos SMS
keywords:
  - Configuración Gator M508
  - Configuración M508
  - Gator M508 Plaspy
  - Configuración rastreador GPS Gator
  - Configuración SMS M508
  - Configuración GPRS M508
  - Configuración rastreador flotas
  - Ajustes servidor rastreador GPS
  - Configuración seguimiento vehicular
  - Configuración rastreador Plaspy
---

# Gator - Configuración del M508

Esta página documenta el contexto público de configuración para usar el rastreador Gator M508 con la plataforma Plaspy. Se enfoca en los ajustes públicos prácticos necesarios para apuntar el dispositivo a Plaspy e incluye plantillas de comandos SMS de ejemplo proporcionadas por el fabricante. Use esta guía para comprender los ajustes de servidor y el flujo típico de integración del M508 con Plaspy para visibilidad de flota.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El M508 admite reportes por SMS y GPRS; los ejemplos a continuación muestran cómo aplicar los ajustes públicos de Plaspy usando el flujo de configuración por SMS del dispositivo.

## Resumen de configuración

El proceso de configuración prepara el rastreador para comunicarse con Plaspy y para aparecer en la plataforma. Una vez configurado correctamente, el dispositivo enviará datos de ubicación y eventos a Plaspy para que usted pueda monitorear vehículos y recibir alertas.

- Apunte el rastreador al endpoint del servidor de Plaspy para habilitar la conectividad con la plataforma.
- Configure el APN y los ajustes de servidor del dispositivo para que el reporte por GPRS llegue a Plaspy.
- Valide la conectividad confirmando que el dispositivo se registra y reporta al endpoint compartido de Plaspy.
- Use SMS o la herramienta del fabricante según corresponda para enviar los comandos de configuración al M508.
- Asegúrese de que el ID del dispositivo y los datos de contacto del usuario estén correctos para que Plaspy pueda asociar el equipo con su cuenta.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: UDP or TCP supported on the device when selecting transport to the server  
- Plaspy automatically detects the tracker protocol when the device connects

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos soportados y realizará la detección de protocolo de forma automática.

## Requisitos previos

- Asegúrese de que el M508 tenga una fuente de energía funcional y esté encendido.  
- Confirme que el dispositivo pueda usar SMS o GPRS según el método de instalación que planee emplear.  
- Tenga a mano la tarjeta SIM y los datos del APN si va a configurar el reporte por GPRS.  
- Conozca el ID del dispositivo (IMEI u otro identificador) para incluirlo en la configuración cuando sea necesario.  
- Disponga del número de teléfono que usará para la configuración por SMS o para recibir alertas.  
- Acceso al método oficial de configuración del fabricante, como comandos SMS o software del proveedor.

## Cómo se conecta este rastreador a Plaspy

El M508 puede configurarse para enviar datos a Plaspy dirigiendo sus reportes al endpoint y puerto compartidos de Plaspy. Una vez que el dispositivo esté apuntando al servidor, Plaspy detectará el protocolo y permitirá que el dispositivo aparezca en la plataforma para monitoreo.

- El rastreador se configura con el dominio o la IP del servidor de Plaspy para que los paquetes GPRS se envíen a Plaspy.  
- El puerto 8888 se utiliza como puerto de destino para la comunicación del rastreador con Plaspy.  
- El dispositivo puede usar transporte UDP o TCP dependiendo de la configuración del equipo y las condiciones de red.  
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta a la plataforma.  
- Tras una configuración exitosa, el dispositivo reportará datos de ubicación y eventos a Plaspy para visibilidad y alertas.

## Flujo típico de configuración

1. Acceda al método de configuración oficial del fabricante o al software del proveedor y revise las plantillas de SMS e instrucciones proporcionadas.  
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor del dispositivo.  
3. Configure el puerto del dispositivo en 8888, que es el puerto que Plaspy utiliza para todos los dispositivos soportados.  
4. Elija UDP o TCP como transporte si el dispositivo solicita selección de transporte durante la configuración.  
5. Proporcione el APN y cualquier credencial que el dispositivo requiera, reemplazando marcadores como [apn] por el APN de su SIM.  
6. Aplique o guarde la configuración y envíe los comandos SMS si está usando un flujo de configuración por SMS.  
7. Reinicie el dispositivo si el fabricante lo requiere para aplicar los nuevos ajustes.  
8. Valide que el dispositivo reporte a Plaspy confirmando que aparece en su cuenta de Plaspy y que envía actualizaciones de ubicación.

## Comandos de configuración de ejemplo

El ejemplo del fabricante del Gator M508 usa comandos SMS para establecer el servidor GPRS e incluye una contraseña de dispositivo predeterminada 123456. Existen dos plantillas públicas de SMS dependiendo de si se requieren usuario y contraseña del APN.

1) Plantilla cuando se requiere usuario y contraseña del APN
```
SS,*[apn]*,*[apnu]*,*[apnp]*,*54.85.159.138*,*8888*,*{{DeviceID}}*,*{{phoneNumberUser}}*,*123456*
```

2) Plantilla cuando solo se requiere el APN
```
S,*[apn]*,*54.85.159.138*,*8888*,*{{DeviceID}}*,*{{phoneNumberUser}}*,*123456*
```

Notas sobre marcadores
- [apn] — nombre del APN de su tarjeta SIM.  
- [apnu] — usuario del APN si su operador lo requiere.  
- [apnp] — contraseña del APN si su operador lo requiere.  
- {{DeviceID}} — identificador del rastreador, comúnmente el IMEI.  
- {{phoneNumberUser}} — número de teléfono que se asociará para alertas o SMS de administrador.  
- 123456 — contraseña de dispositivo de ejemplo mostrada en la plantilla del fabricante. Reemplace por la contraseña en uso si es distinta.

Envíe el SMS correspondiente desde un número autorizado al M508. Después de enviarlo, permita tiempo para que el dispositivo se registre en la red y para que Plaspy detecte la conexión entrante.

## Notas de configuración

- El M508 admite configuración por SMS como se muestra en la muestra del fabricante; utilice SMS únicamente desde números administrativos autorizados.  
- Las versiones de firmware y las herramientas del proveedor pueden cambiar la sintaxis exacta de los comandos o los campos disponibles; verifique siempre la guía actual del fabricante.  
- Si el dispositivo o el operador exige selección explícita de transporte, elija UDP o TCP según la fiabilidad de la red y las recomendaciones del operador.  
- Use el dominio d.plaspy.com o la IP 54.85.159.138 y el puerto 8888 exactamente como se indican para garantizar que Plaspy reciba los reportes.  
- Mantenga las credenciales del dispositivo y los números de teléfono correctos al completar los marcadores para evitar problemas de registro.

## Por qué usar Plaspy con esta configuración

Configurar el Gator M508 para reportar a Plaspy ofrece a los operadores de flota un endpoint consistente para visibilidad de dispositivos, actualizaciones de ubicación y monitoreo de eventos. Con la detección automática de protocolo por parte de Plaspy y una configuración de servidor compartida, la incorporación de dispositivos como el M508 se vuelve un proceso predecible que facilita las operaciones y los casos de uso relacionados con seguridad.

To learn more about Plaspy and supported tracker integrations visit https://www.plaspy.com. Please verify the latest device specific setup details and any firmware notes with the manufacturer at http://en.gatorgroup.cn because manufacturer specifications and configuration methods can change over time.
