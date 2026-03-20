---
slug: /gotop/d22/configuration
id: d22-configuration
sidebar_label: Configuration
title: GOTOP - D22 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del GOTOP D22 con ajustes de servidor Plaspy y pasos prácticos para integrar el equipo
keywords:
  - configuración GOTOP D22
  - instalación GOTOP D22
  - GOTOP D22 Plaspy
  - configuración servidor GOTOP D22
  - configuración rastreador GPS GOTOP
  - configuración seguimiento vehicular
  - configuración rastreador para flotas
  - instalación D22
  - ajustes servidor rastreador GPS
  - configuración seguimiento D22
---

# GOTOP - D22: Configuración

Esta página describe el contexto público de configuración para usar el rastreador GOTOP D22 con Plaspy. Se enfoca en los ajustes de servidor compartidos y en los pasos prácticos que puede aplicar para que el D22 reporte ubicación y eventos a Plaspy, además de indicar qué verificar antes de intentar la integración.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando los equipos envían datos a la plataforma. Los pasos de configuración en el lado del fabricante para el D22 pueden variar según la versión del firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración del proveedor que utilice. Use la guía a continuación junto con la documentación de GOTOP para obtener instrucciones específicas y actualizadas del dispositivo.

## Resumen de la configuración

El objetivo de esta configuración es preparar el GOTOP D22 para comunicarse de forma confiable con la plataforma Plaspy, de modo que vehículos y activos sean visibles en tiempo real. La configuración asocia el reporte del D22 con los endpoints del servidor Plaspy y garantiza que el dispositivo transmita por el transporte y puerto correctos.

- Configure el rastreador para que reporte al endpoint del servidor Plaspy y así transmitir ubicación y alarmas.
- Seleccione el modo de transporte que soporte el dispositivo y establezca el puerto común de Plaspy usado para todos los equipos.
- Guarde y aplique los ajustes en el D22 y reinícielo si la herramienta o el firmware requieren un reinicio.
- Valide la conectividad verificando que el dispositivo aparezca en Plaspy y que envíe actualizaciones.
- Ajuste entradas de alarma, SOS y sensores en la configuración del dispositivo para asegurar que los eventos se reenvíen a Plaspy.

## Ajustes del servidor Plaspy

Utilice los siguientes ajustes públicos de servidor de Plaspy al configurar el GOTOP D22:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP según la opción de configuración del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo envía datos

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y depende de la detección automática de protocolo para identificar el formato del rastreador.

## Requisitos típicos antes de la configuración

- Dispositivo alimentado e instalado conforme a la guía de instalación de GOTOP, con batería cargada o alimentación del vehículo conectada.
- Cobertura de red que soporte el módulo celular 4G del equipo y acceso a la red por parte del rastreador.
- Acceso a las herramientas de configuración GOTOP o al portal del proveedor usado para establecer parámetros del dispositivo.
- Identificadores básicos del equipo, como el IMEI, disponibles para identificar la unidad en Plaspy cuando se conecte.
- Una cuenta en Plaspy o un flujo de aprovisionamiento para registrar y monitorear el dispositivo en la plataforma.
- Conocimiento de la versión de firmware del rastreador para seguir el procedimiento de configuración correspondiente en la documentación de GOTOP.

## Cómo se conecta este rastreador a Plaspy

Al configurarlo para Plaspy, el D22 envía su telemetría y datos de eventos al endpoint y puerto compartidos de Plaspy para que la plataforma pueda ofrecer servicios de seguimiento y monitoreo.

- El rastreador transmite posiciones y eventos de alarma al dominio o IP configurado de Plaspy.
- Los datos se envían por el protocolo de transporte elegido, UDP o TCP, al puerto 8888.
- Plaspy recibe las conexiones entrantes en el puerto compartido y detecta automáticamente el protocolo del dispositivo para su procesamiento.
- Una vez recibidos los datos, Plaspy muestra ubicación, movimiento y estado de alarmas para monitoreo operativo.
- El rastreador también puede almacenar datos localmente y reenviar los registros almacenados a Plaspy cuando se restablece la conectividad.

## Flujo de configuración habitual

1. Acceda al método o software oficial de configuración del GOTOP D22 proporcionado por el fabricante o proveedor.
2. Localice en la herramienta de configuración la sección de ajustes de servidor o APN para reporte.
3. Ingrese el servidor Plaspy como d.plaspy.com o utilice la IP 54.85.159.138 como endpoint alternativo.
4. Establezca el puerto del dispositivo en 8888, que es usado por Plaspy para todos los equipos compatibles.
5. Elija UDP o TCP como transporte si el dispositivo requiere seleccionar el protocolo.
6. Aplique o guarde los cambios de configuración en la herramienta GOTOP.
7. Reinicie el dispositivo si la herramienta o el firmware solicitan un reboot para aplicar los ajustes.
8. Valide que el dispositivo reporte a Plaspy verificando el estado en su cuenta de Plaspy y confirmando actualizaciones recientes de ubicación o eventos.

## Ejemplos de comandos de configuración

El método de configuración del D22 varía según la herramienta del fabricante y el firmware. Los dispositivos GOTOP se suelen configurar mediante software del proveedor, portales web o interfaces por SMS/comandos según el firmware. Dado que los comandos y la sintaxis dependen de la versión del firmware y de la herramienta del proveedor, aquí no se incluyen ejemplos concretos. Consulte las guías de configuración de GOTOP para plantillas de comandos por línea o SMS y siga el orden recomendado por el fabricante al aplicar ajustes.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los nombres de menú, la sintaxis de comandos o los flujos de configuración. Compruebe que los pasos coinciden con el firmware de su dispositivo.
- Elija UDP o TCP según sus necesidades de instalación y red. Ambos transportes son compatibles con Plaspy en el puerto 8888, y Plaspy detectará el protocolo de forma automática.
- Si el D22 usa almacenamiento offline, verifique que los datos almacenados se reenvíen cuando se restaure la conectividad para que Plaspy reciba las subidas desde áreas sin cobertura.
- Configure las entradas de alarma como SOS, corte de energía, exceso de velocidad y sensores de puerta en el equipo para que esos eventos se envíen a Plaspy.
- La comunicación bidireccional de audio y el control de relés externos deben configurarse según las instrucciones de GOTOP cuando su firmware D22 y la instalación lo permitan.

## Por qué usar Plaspy con esta configuración

Usar el GOTOP D22 con Plaspy ofrece a las organizaciones un camino sencillo para obtener ubicación en tiempo real, reportes de alarmas y visibilidad operativa. Los ajustes de servidor compartidos de Plaspy simplifican el despliegue porque la plataforma utiliza el mismo puerto para todos los dispositivos y detecta automáticamente el protocolo del rastreador cuando se conecta.

Para obtener más información sobre Plaspy y cómo soporta integraciones de dispositivos visite https://www.plaspy.com. Para detalles específicos más recientes sobre la configuración del GOTOP D22, notas de firmware e instrucciones del fabricante, verifique la información en el sitio oficial de GOTOP https://www.gotop.cc/ ya que las especificaciones y métodos de configuración pueden cambiar con el tiempo.
