---
slug: /gotop/c720/configuration
id: c720-configuration
sidebar_label: Configuration
title: GOTOP - C720 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar GOTOP C720 con Plaspy, con ajustes de servidor y flujo de instalación
keywords:
  - configuración GOTOP C720
  - configuración inicial GOTOP C720
  - GOTOP C720 Plaspy
  - configuración rastreador GPS GOTOP
  - ajustes de servidor GOTOP C720
  - configuración rastreador vehicular
  - configuración servidor Plaspy
  - instalación GOTOP C720
  - rastreador GPS GOTOP C720
  - compatibilidad rastreador GOTOP Plaspy
---

# GOTOP - Configuración del C720

Esta página explica el contexto público de configuración para usar el GOTOP C720 Relay Car GPS Tracker con la plataforma Plaspy. Describe los ajustes de servidor compartidos que Plaspy espera, pasos prácticos de preparación y un flujo de trabajo típico para lograr que el C720 envíe posiciones y telemetría de alarmas a Plaspy. La orientación aquí se centra en prácticas de configuración públicamente disponibles y en los detalles del endpoint de Plaspy que debe aplicar en el dispositivo o mediante las herramientas del fabricante.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador; los pasos exactos de configuración desde el lado del fabricante pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El C720 se comunica vía GSM/GPRS y SMS con plataformas en línea, por lo que normalmente configurará el dispositivo mediante el método GOTOP (comandos SMS o herramienta de fabricante) y apuntará al endpoint y puerto de Plaspy que se indican más abajo.

## Resumen de la configuración

El objetivo de este proceso es preparar el C720 para que se comunique de forma fiable con Plaspy, validar la conectividad y permitir que el dispositivo aparezca en la plataforma para seguimiento en tiempo real y alertas.

- Configure el dispositivo para enviar paquetes de posición GPRS y mensajes de alarma al endpoint de Plaspy.
- Valide la conectividad de la red móvil y los ajustes correctos del APN para el reporte por GPRS.
- Establezca los valores del servidor Plaspy y seleccione el protocolo de transporte (UDP o TCP) si el dispositivo lo requiere.
- Confirme que el dispositivo aparece en Plaspy y que la plataforma recibe telemetría de posición y alarmas.
- Pruebe la notificación de eventos, como geocercas y alarmas por movimiento, para asegurar que las alertas llegan a Plaspy.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de servidor al configurar el C720 para trabajar con Plaspy:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP; el dispositivo puede configurarse con UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos usan el mismo puerto en Plaspy

## Requisitos típicos antes de la configuración

- Un GOTOP C720 alimentado e instalado, con el cableado vehicular completado y accesible para configuración.
- Una tarjeta SIM activa con datos habilitados y los ajustes APN correctos proporcionados por el operador móvil.
- Acceso al método oficial de configuración GOTOP o al software del fabricante para establecer parámetros de servidor y red.
- Tener a mano el IMEI del dispositivo y cualquier identificador que el proveedor facilite para el registro o búsqueda en la plataforma.
- Señal GSM fiable en el lugar de instalación para permitir el reporte por GPRS hacia Plaspy.
- Acceso administrativo en Plaspy para confirmar la recepción de telemetría entrante tras la configuración.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el C720 usa su enlace GSM/GPRS para enviar posiciones GPS y telemetría del dispositivo al endpoint y puerto compartidos de Plaspy. Plaspy procesa esos paquetes, detecta automáticamente el protocolo del dispositivo y muestra la ubicación y la información de alarmas en la plataforma.

- El rastreador envía paquetes de posición y mensajes de estado a d.plaspy.com (o 54.85.159.138) en el puerto 8888.
- Los mensajes pueden transportarse por UDP o TCP según la selección del dispositivo; Plaspy aceptará ambos y detectará el protocolo automáticamente.
- Alarmas orientadas a eventos, como activación de geocerca, vibración o movimiento, y cortes de alimentación, se reenvían a Plaspy para notificaciones e informes.
- Actualizaciones de posición continuas o periódicas permiten seguimiento en vivo y reproducción histórica de rutas dentro de Plaspy.
- El estado de salud y conectividad del dispositivo será visible en Plaspy una vez que se reciban paquetes desde el C720.

## Flujo de configuración común

1. Acceda al método oficial de configuración GOTOP o al software proporcionado por el fabricante (comandos SMS, herramienta USB o app del proveedor según disponibilidad).
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 en el campo de dirección del servidor del dispositivo.
3. Configure el puerto del servidor a 8888. Recuerde que Plaspy usa el mismo puerto para todos los dispositivos.
4. Seleccione UDP o TCP si el dispositivo requiere elegir un protocolo de transporte; el dispositivo puede utilizar UDP o TCP en el puerto 8888.
5. Configure el APN de la SIM y otros parámetros de red que exija el operador para que el dispositivo establezca GPRS.
6. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones del fabricante lo requieren.
7. Valide que el dispositivo reporte a Plaspy comprobando los mensajes de posición y alarmas entrantes en la plataforma y confirmando que el IMEI o identificador del dispositivo es visible.

## Comandos de configuración de ejemplo

Los comandos exactos y el método dependen del firmware GOTOP y de la interfaz de configuración que utilice. Los fabricantes suelen proporcionar comandos SMS, herramientas de configuración para PC o apps móviles para establecer servidor, puerto y APN. Dado que los comandos varían por versión de firmware y herramienta del proveedor, consulte la guía de configuración GOTOP incluida con el equipo o el sitio web de GOTOP para el conjunto de comandos preciso.

Si usa configuración por SMS, el flujo típico es:
- Utilice el formato SMS del fabricante para establecer la dirección del servidor a d.plaspy.com o 54.85.159.138
- Configure el puerto a 8888
- Configure los ajustes de APN para su SIM
- Guarde y reinicie el dispositivo

Consulte la documentación de GOTOP para el texto exacto del SMS o los campos del software requeridos según el firmware de su dispositivo.

## Notas de configuración

- Revisiones de firmware y hardware pueden modificar los comandos SMS exactos o los campos de configuración; siempre verifique con el manual GOTOP correspondiente a su unidad.
- Elegir TCP frente a UDP puede afectar la semántica de entrega; si el dispositivo soporta ambos, seleccione el transporte recomendado según su instalación y condiciones de red.
- Asegúrese de que APN, usuario y contraseña sean correctos para la SIM; mantenga marcadores como {{apn}}, {{apnu}} o {{apnp}} si su herramienta de configuración los requiere y reemplácelos por los valores del operador.
- Para instalaciones ocultas, verifique la intensidad de la señal GSM y pruebe la conectividad de datos antes de fijar la ubicación final de montaje.
- Si depende de un respaldo por SMS, confirme que los mensajes de alarma estén correctamente formateados para Plaspy o coordine con su proveedor para la entrega SMS-a-plataforma.

## Por qué usar Plaspy con esta configuración

Configurar el GOTOP C720 para reportar a Plaspy ofrece a las organizaciones una forma directa de recopilar datos de ubicación en tiempo real, alarmas y rutas históricas desde un rastreador compacto y discreto. Plaspy centraliza la telemetría de múltiples dispositivos, permitiendo a gestores de flotas y equipos de seguridad monitorear desplazamientos, recibir alertas de geocerca y cortes de alimentación, y apoyar procesos de recuperación o gestión de incidentes.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device-specific configuration methods and firmware details with the manufacturer at https://www.gotop.cc/. Manufacturer specifications, setup methods, and firmware behavior can change over time so always confirm current instructions on the official GOTOP resources.
