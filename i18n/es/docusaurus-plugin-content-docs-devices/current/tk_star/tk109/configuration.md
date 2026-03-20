---
slug: /tk_star/tk109/configuration
id: tk109-configuration
sidebar_label: Configuration
title: TK-Star - TK109 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del TK‑Star TK109 con ajustes de servidor Plaspy, comandos SMS, APN y flujo de instalación
keywords:
  - Configuración TK Star TK109
  - Configuración TK109 Plaspy
  - Configuración servidor TK109
  - Configuración rastreador GPS TK109
  - Configuración software de rastreo TK109
  - Configuración plataforma GPS TK109
  - Configuración rastreador GPS TK Star
  - Configuración de dispositivo Plaspy
  - Guía de configuración rastreador GPS
  - Ajustes APN TK109
---

# TK-Star - TK109 Configuración

Esta página documenta el contexto público de configuración para usar el TK‑Star TK109 con Plaspy. Reúne los valores compartidos del servidor Plaspy que necesitará, explica los pasos y requisitos prácticos para integrar el TK109 y reproduce los comandos SMS de configuración de uso común que están disponibles públicamente para este modelo.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía para preparar el dispositivo para Plaspy y consulte la documentación de TK‑Star para diferencias específicas de modelo.

## Resumen de la configuración

El proceso de configuración deja al TK109 listo para comunicarse de forma confiable con la plataforma Plaspy y garantiza que los datos de ubicación y eventos lleguen a su cuenta Plaspy. La configuración típica incluye aplicar los valores APN correctos, apuntar el rastreador al endpoint de Plaspy y establecer el intervalo de reporte y el modo de transporte deseados.

- Configure el APN del dispositivo, el usuario y la contraseña para que el rastreador use datos móviles GPRS.  
- Establezca la dirección del servidor GPRS y el puerto de Plaspy para que el dispositivo transmita telemetría a Plaspy.  
- Elija UDP o TCP en el dispositivo cuando se solicite el protocolo de transporte, de acuerdo con el comportamiento de red del equipo.  
- Fije un intervalo de subida adecuado para balancear la precisión de la ubicación y el consumo de batería.  
- Verifique que el dispositivo sea visible y esté reportando en Plaspy después de la configuración.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP on the device where transport selection is required  
- Plaspy automatically detects the tracker protocol and Plaspy uses the same port for all supported devices

## Requisitos típicos antes de comenzar

- Una unidad TK109 con batería y encendida, con conectividad celular operativa y una SIM que soporte datos GPRS y SMS (si va a usar configuración por SMS).  
- Acceso al método de configuración oficial de TK‑Star, como comandos SMS o el manual del fabricante.  
- Datos APN correctos del operador de la SIM para datos móviles; guarde marcadores de APN como {{apn}}, {{apnu}} y {{apnp}} para usar en los comandos SMS.  
- Una forma de enviar SMS al rastreador (un teléfono o un gateway SMS) si usa configuración vía SMS.  
- Acceso a su cuenta Plaspy para confirmar la visibilidad del dispositivo y monitorear la telemetría entrante tras la configuración.

## Cómo se conecta este rastreador a Plaspy

Cuando está correctamente configurado, el TK109 envía posiciones y notificaciones de eventos por GPRS celular al endpoint del servidor de Plaspy. Plaspy recibe esos mensajes en el puerto compartido y detecta automáticamente el protocolo del dispositivo para parsear y mostrar los datos en la plataforma.

- El rastreador envía cargas periódicas por GPRS al endpoint de Plaspy (d.plaspy.com o 54.85.159.138) en el puerto 8888.  
- El transporte puede ser UDP o TCP según la configuración del equipo; Plaspy aceptará cualquiera de los dos y detectará el protocolo.  
- Actualizaciones de ubicación y eventos de alarma (por ejemplo SOS o vibración) se reenvían a Plaspy para monitoreo en tiempo real.  
- Plaspy almacena los datos históricos de ruta y expone eventos y recorridos mediante las herramientas de la plataforma para revisión e informes.  
- Tras la configuración, verifique que el dispositivo aparece y actualiza periódicamente en Plaspy para confirmar que está operativo.

## Flujo de configuración común

1. Acceda al método de configuración oficial de TK‑Star o a la documentación para confirmar el formato de los comandos SMS o la herramienta del fabricante a utilizar.  
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la dirección IP 54.85.159.138 en los ajustes de servidor del dispositivo.  
3. Ajuste el puerto del dispositivo a 8888 ya que Plaspy usa el mismo puerto para todos los dispositivos compatibles.  
4. Seleccione UDP o TCP en el equipo si solicita un protocolo de transporte.  
5. Aplique o guarde la configuración en el rastreador (para configuraciones por SMS esto implica enviar los comandos SMS en el orden correcto).  
6. Reinicie o aplique un ciclo de energía al dispositivo si la versión de firmware lo requiere para que los nuevos ajustes entren en vigor.  
7. Valide que el dispositivo reporta a Plaspy confirmando posiciones y eventos entrantes en su cuenta Plaspy.

## Comandos de configuración de ejemplo

El TK109 puede configurarse mediante comandos SMS. Los siguientes comandos se obtuvieron de ejemplos públicos de configuración de TK‑Star y usan la contraseña predeterminada del dispositivo 123456. Mantenga el orden de los comandos tal como se muestra cuando el orden sea importante.

- Restauración opcional a configuración de fábrica (use sólo si necesita restablecer el rastreador a valores de fábrica):
```text
begin123456
```

- Establecer el APN del operador (reemplace {{apn}} por el APN de su operador):
```text
apn123456 {{apn}}
```

- Establecer el usuario del APN (si su operador lo requiere; reemplace {{apnu}} por el usuario APN):
```text
apnuser123456 {{apnu}}
```

- Establecer la contraseña del APN (si su operador lo requiere; reemplace {{apnp}} por la contraseña APN):
```text
apnpasswd123456 {{apnp}}
```

- Apuntar el servidor GPRS a Plaspy usando la IP y el puerto de Plaspy (esto direcciona el dispositivo a Plaspy):
```text
adminip123456 54.85.159.138 8888
```

- Establecer el intervalo de envío a 60 segundos (ajuste el valor según sea necesario):
```text
upload123456 60
```

- Cambiar el dispositivo al modo de reporte GPRS:
```text
gprs123456
```

Notas sobre los comandos y los marcadores:
- La contraseña numérica 123456 en estos ejemplos es la contraseña predeterminada común mostrada en documentación pública. Si la contraseña de su dispositivo ha sido cambiada, utilice la contraseña actual en lugar de 123456.  
- {{apn}}, {{apnu}} y {{apnp}} son marcadores para el APN, el usuario y la contraseña de su operador de SIM. Reemplace con los valores de su operador. Si su operador no requiere usuario o contraseña, los comandos apnuser y apnpasswd no son necesarios.  
- Use el comando adminip para apuntar directamente a la IP y el puerto del servidor Plaspy; algunos instaladores prefieren usar el dominio d.plaspy.com en las herramientas TK‑Star cuando se aceptan nombres de dominio. Tanto el dominio como la IP apuntan a Plaspy.

## Notas de configuración

- La configuración por SMS del TK109 se usa habitualmente para instalaciones en campo; verifique que su dispositivo acepte comandos SMS y que la SIM pueda recibir SMS.  
- Las versiones de firmware y las revisiones de hardware pueden modificar el comportamiento exacto de los comandos o los nombres admitidos; consulte la documentación de TK‑Star para diferencias específicas de firmware.  
- Elija UDP o TCP según su entorno de red o la preferencia del instalador. Plaspy acepta ambos y detecta el protocolo al recibir los mensajes.  
- Usar el dominio d.plaspy.com puede simplificar el mantenimiento; emplear la IP 54.85.159.138 es una alternativa si no hay resolución DNS disponible.  
- Siempre confirme que el dispositivo reporta a Plaspy después de la configuración y supervise las primeras cargas para asegurar un parseo y manejo de eventos correctos.

## Por qué usar Plaspy con esta configuración

Integrar el TK‑Star TK109 con Plaspy le brinda visibilidad centralizada y en tiempo real de la ubicación y eventos de un rastreador personal compacto con soporte multi‑GNSS. Para cuidadores, dueños de mascotas y monitoreo de pequeños activos, la combinación del hardware TK109 y la plataforma Plaspy ofrece reportes sencillos, alertas y acceso a rutas históricas para ayudar a gestionar operaciones diarias e incidentes.

To learn more about Plaspy and how it supports device integrations like the TK109 visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and detailed TK‑Star documentation verify setup details at the manufacturer site https://www.tk-star.com/.
