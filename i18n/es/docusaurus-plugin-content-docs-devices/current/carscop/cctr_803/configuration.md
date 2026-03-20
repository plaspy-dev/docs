---
slug: /carscop/cctr_803/configuration
id: cctr_803-configuration
sidebar_label: Configuration
title: Carscop - CCTR-803 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador Carscop CCTR-803 para uso con servidores Plaspy y configuración por SMS
keywords:
  - Configuración Carscop CCTR-803
  - Configuración inicial Carscop CCTR-803
  - CCTR-803 Plaspy
  - Configuración rastreador GPS Carscop
  - Guía configuración rastreador Carscop
  - Configuración servidor CCTR-803
  - Configuración SMS rastreador GPS
  - Configuración APN GPRS Carscop
  - Plataforma seguimiento vehicular Plaspy
  - Guía integración CCTR-803
---

# Carscop - Configuración del CCTR-803

Esta página documenta el contexto público de configuración para usar el rastreador GPS Carscop CCTR-803 con Plaspy. Reúne los ajustes prácticos del servidor y los comandos de configuración por SMS publicados para el dispositivo, y explica lo que debe aplicar para registrar y enrutar el rastreador hacia Plaspy para seguimiento en tiempo real y visibilidad en la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, mientras que los pasos exactos del fabricante pueden variar según la revisión de firmware, la versión de hardware, el tipo de instalación y las herramientas del proveedor. El CCTR-803 admite configuración por SMS y ajuste de APN para GPRS, los cuales se abordan aquí usando únicamente comandos y orientación públicos.

## Resumen de la configuración

Esta guía se centra en preparar el CCTR-803 para que pueda comunicarse de forma confiable con los servidores de Plaspy para el envío de ubicación y eventos. El dispositivo puede configurarse por SMS para establecer el APN, los parámetros GPRS del servidor y poner el rastreador en línea para que Plaspy reciba datos.

- Configure el APN del operador y, si aplica, las credenciales del APN para que el dispositivo abra una sesión GPRS.
- Establezca el servidor GPRS apuntando a Plaspy usando la IP o el dominio provistos y el puerto compartido que usa Plaspy.
- Seleccione transporte UDP o TCP en el dispositivo si el método de configuración lo requiere.
- Use comandos SMS para aplicar los ajustes si no dispone de una herramienta de PC y mantenga el rastreador en línea con comandos de keepalive.
- Valide la conectividad para que el dispositivo aparezca y reporte correctamente en Plaspy una vez aplicada la configuración.

## Ajustes del servidor Plaspy

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

Estos valores son los ajustes públicos del endpoint de Plaspy que debe usar al apuntar el CCTR-803 a la plataforma de rastreo. Plaspy emplea el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador.

## Requisitos típicos antes de configurar

- Una tarjeta SIM operativa con datos móviles habilitados y capacidad de SMS instalada en el rastreador.
- Batería suficiente o alimentación externa para que el dispositivo permanezca encendido durante la configuración.
- Acceso al método de configuración por SMS del rastreador o a la herramienta oficial de configuración de Carscop.
- Conocimiento de la contraseña del dispositivo para comandos SMS; la contraseña predeterminada que aparece en ejemplos públicos es 123456.
- La información correcta del APN del operador móvil para habilitar la conectividad GPRS.
- Confirmación de que el firmware del dispositivo soporta la configuración del servidor GPRS vía SMS.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el CCTR-803 envía datos de ubicación y alarmas al endpoint y puerto compartidos de Plaspy. Plaspy detecta automáticamente el protocolo del rastreador, por lo que el mismo puerto y endpoint se usan para los dispositivos soportados.

- El rastreador inicia una conexión GPRS usando el APN configurado y conecta al endpoint del servidor Plaspy.
- Los datos se envían al servidor de Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888 usando UDP o TCP.
- Las alarmas y eventos SOS pueden reenviarse a la plataforma cuando se configura el reporte hacia el servidor.
- Comandos de keepalive o intervalos periódicos de subida mantienen la sesión activa para que Plaspy reciba actualizaciones regulares.
- Si el reporte por SMS está habilitado por separado, la ubicación también puede consultarse por SMS, pero la visibilidad en la plataforma requiere el reporte GPRS al endpoint de Plaspy.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de Carscop o al software correspondiente, o prepárese para enviar comandos SMS según lo indicado por el fabricante.
2. Asegúrese de que la SIM tenga datos y SMS, y de conocer el APN del operador y cualquier credencial APN necesaria.
3. Ingrese el servidor de Plaspy como d.plaspy.com o la dirección IP 54.85.159.138 en la configuración del dispositivo.
4. Establezca el puerto en 8888 ya que Plaspy usa el mismo puerto para todos los dispositivos.
5. Seleccione el transporte UDP o TCP en el dispositivo si es necesario elegir explícitamente.
6. Aplique o guarde la configuración en el dispositivo y reinicie el rastreador si el equipo lo requiere o para que los cambios surtan efecto.
7. Valide que el dispositivo reporte a Plaspy y que la ubicación y los eventos aparezcan en la plataforma.

Los comandos SMS de ejemplo que siguen reflejan este flujo y muestran cómo establecer el APN, el servidor y mantener el rastreador en línea.

## Ejemplos de comandos de configuración

El CCTR-803 puede configurarse enviando comandos SMS al dispositivo. Los siguientes comandos públicos se presentan en el orden mostrado en la muestra del fabricante. La contraseña del dispositivo usada en estos ejemplos es 123456, que es la predeterminada publicada. A continuación encontrará notas de etiqueta tras cada comando.

- Restauración inicial opcional a valores de fábrica
```
RESET*123456
```
Use este comando solo si necesita restaurar los valores de fábrica antes de la configuración. Es opcional y se utiliza normalmente para borrar configuraciones previas.

- Establecer la zona horaria a UTC 0
```
TIMEZONE*123456*+00
```

- Establecer el APN del operador
```
APN*123456*[apn]
```
Reemplace [apn] con la cadena APN del operador móvil asociada a la SIM del dispositivo.

- Establecer nombre de usuario y contraseña del APN si el operador lo requiere
```
USERNAME*123456*[apnu]*[apnp]
```
Reemplace [apnu] con el usuario del APN y [apnp] con la contraseña del APN. Estos marcadores deben completarse solo si el operador exige credenciales.

- Configurar el servidor GPRS a Plaspy usando la IP pública y el puerto
```
IP*123456*54.85.159.138,8888
```
Este comando configura el dispositivo para reportar al IP y puerto del servidor Plaspy. También puede usar el dominio d.plaspy.com donde el método de configuración del dispositivo lo soporte.

- Mantener el rastreador en línea con reporte periódico
```
KEEPONLINE*123456
```
Este comando ayuda a mantener el dispositivo en línea para que informe regularmente al servidor configurado.

Notas sobre los marcadores y la contraseña
- [apn] es un marcador para el APN del operador móvil.
- [apnu] es un marcador para el usuario del APN si se requiere.
- [apnp] es un marcador para la contraseña del APN si se requiere.
- 123456 aparece en ejemplos públicos como la contraseña SMS predeterminada del dispositivo. Cambie la contraseña después de la configuración inicial si es posible.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la disponibilidad o la sintaxis de los comandos. Verifique los comandos en el manual del dispositivo o en las notas del proveedor.
- La configuración por SMS requiere que el rastreador pueda recibir SMS y que la SIM soporte mensajería. Puede ser necesario crédito de SMS.
- El CCTR-803 admite establecer el servidor GPRS por IP y puerto, o por dominio cuando el firmware del dispositivo resuelve nombres de dominio.
- Elija UDP o TCP según la preferencia del instalador; Plaspy soporta ambos y detectará automáticamente el protocolo del rastreador en su puerto compartido.
- Tras la configuración inicial, cambie la contraseña predeterminada si el dispositivo lo permite para mejorar la seguridad.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el Carscop CCTR-803 ofrece una forma directa de consolidar la ubicación de vehículos, alarmas y el estado en una única plataforma. Al configurar el APN GPRS y dirigir el rastreador a Plaspy en el endpoint compartido, las organizaciones obtienen visibilidad continua, manejo de eventos más ágil y una gestión simplificada de dispositivos en toda la flota.

Learn more about Plaspy and how the platform handles device connections at https://www.plaspy.com. For the latest device specific instructions firmware notes and manufacturer details always verify the current documentation at http://www.carscop.com/
