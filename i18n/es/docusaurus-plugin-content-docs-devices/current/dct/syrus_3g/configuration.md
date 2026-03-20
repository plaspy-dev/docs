---
slug: /dct/syrus_3g/configuration
id: syrus_3g-configuration
sidebar_label: Configuration
title: DCT - Syrus 3G+ Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del DCT Syrus 3G+ para conectar con Plaspy y ejemplo de script Syrus Desk para puesta en marcha rápida
keywords:
  - DCT Syrus 3G+ configuración
  - DCT Syrus 3G+ instalación
  - Syrus 3G+ Plaspy
  - configuración tracker Plaspy
  - script Syrus Desk
  - integración Pegasus Gateway
  - integración kit Syrus IoT
  - configuración rastreo vehicular
  - configuración servidor GPS tracker
  - configuración telemática hub
---

# Configuración DCT - Syrus 3G+

Esta página documenta el contexto público de configuración para usar el tracker DCT Syrus 3G+ con Plaspy. Reúne los ajustes de servidor clave que debe aplicar en el dispositivo o mediante la herramienta del fabricante, muestra un ejemplo de script para Syrus Desk incluido en materiales públicos y explica los pasos prácticos para que el tracker reporte a Plaspy, permitiendo seguimiento en tiempo real e ingestión de telemetría.

Plaspy emplea ajustes de servidor compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del tracker cuando el dispositivo se conecta. Los pasos de configuración del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor; utilice esta guía junto con la documentación del Syrus 3G+ y Syrus Desk al preparar el equipo.

## Visión general de la configuración

El objetivo al configurar un Syrus 3G+ para Plaspy es apuntar el dispositivo al endpoint compartido de Plaspy, asegurarse de la conectividad celular y los valores correctos de APN, y habilitar las reglas de eventos e informes que envían posición y telemetría a la plataforma. El ejemplo de script modelConfiguration que sigue muestra cómo los scripts estilo Syrus Desk ajustan el APN y la entrada del servidor AVL remoto para Plaspy.

- Configure el servidor remoto (dominio o IP) apuntando a Plaspy y asegúrese de que el dispositivo use el puerto 8888.
- Configure el APN del dispositivo y, si la SIM lo requiere, los campos de usuario y contraseña del APN.
- Guarde y cargue la configuración mediante Syrus Desk o la herramienta del fabricante para aplicar los ajustes en el tracker.
- Habilite las reglas de reporte por tiempo, distancia o eventos que controlan cuándo el dispositivo envía actualizaciones a la plataforma.
- Valide la conectividad confirmando que el dispositivo aparece en Plaspy y que se recibe telemetría.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: soporta UDP o TCP según los requerimientos del dispositivo
- Plaspy detecta automáticamente el protocolo del tracker cuando un dispositivo se conecta y usa el mismo puerto para todos los dispositivos compatibles

## Requisitos típicos antes de la configuración

- Una tarjeta SIM activa con plan de datos y los datos APN correctos para el operador móvil objetivo
- Acceso a Syrus Desk u otra herramienta oficial de configuración DCT para cargar scripts o enviar comandos de configuración
- El Syrus 3G+ con alimentación y conectado para que la herramienta de configuración pueda comunicarse con el dispositivo
- Una cuenta en Plaspy y un proyecto activo donde el dispositivo será registrado y monitoreado
- Conocimientos básicos de los marcadores {{apn}}, {{apnu}} y {{apnp}} para reemplazarlos por los valores del operador cuando sea necesario
- Respaldo de cualquier configuración existente si el dispositivo ya está en servicio

## Cómo se conecta este tracker a Plaspy

Al configurarse para Plaspy, el Syrus 3G+ envía ubicación y telemetría al endpoint y puerto compartidos de Plaspy. Plaspy ingiere los datos entrantes y mapea la carga útil en telemetría de la plataforma para mapas en vivo, alertas e informes históricos. El script de ejemplo de Syrus Desk en esta guía muestra un enfoque práctico para establecer el APN y la dirección del servidor remoto usada por Plaspy.

- El dispositivo apunta a d.plaspy.com o a 54.85.159.138 y está configurado para usar el puerto 8888
- El transporte puede seleccionarse como UDP o TCP en el dispositivo cuando se requiera
- Plaspy detecta automáticamente el protocolo del tracker para que los dispositivos puedan conectarse sin registro de protocolo personalizado
- El tracker envía posición y los informes de eventos configurados al servidor de Plaspy para su visualización y procesamiento
- Los disparadores de eventos e informes de entradas configurados en el dispositivo se convierten en telemetría accionable dentro de Plaspy

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración DCT Syrus, como Syrus Desk o la herramienta de configuración proporcionada por el proveedor.
2. Prepare o edite un script de configuración o plantilla y reemplace los marcadores APN con los valores de su operador si es necesario.
3. Ingrese el servidor de Plaspy como d.plaspy.com o alternativamente 54.85.159.138 en el campo del servidor del dispositivo.
4. Establezca el puerto del dispositivo en 8888 y elija UDP o TCP si el dispositivo requiere selección de transporte.
5. Aplique o guarde la configuración en el Syrus 3G+ y cargue el script en el dispositivo usando Syrus Desk.
6. Reinicie o corte y vuelva a suministrar energía al tracker si la herramienta o el firmware requieren un reinicio para aplicar los ajustes.
7. Valide que el dispositivo reporte a Plaspy verificando la presencia del dispositivo y la telemetría en su proyecto Plaspy.

## Comandos de configuración de ejemplo

El ejemplo modelConfiguration para Syrus 3G+ provisto como script de Syrus Desk puede guardarse con la extensión .tmf y cargarse en Syrus Desk. Los comandos que siguen se presentan en el mismo orden que el script público de ejemplo. Mantenga los marcadores tal como se muestran y reemplácelos por valores reales antes de cargar.

Guarde como archivo de texto plano con extensión .tmf y cargue con Syrus Desk:

> Notas sobre los marcadores
> - {{apn}} es la cadena APN de su operador móvil
> - {{apnu}} es el usuario del APN cuando se requiera
> - {{apnp}} es la contraseña del APN cuando se requiera

Ejemplo de script para Syrus Desk:

```
# Syrus SB script
# Ejemplo de inicio
# Eliminar cualquier configuración previa
>SRT;CONFIG<
>SXADP**U<
# configurando el APN
>SRFA{{apn}}<
>SRFI<
>SRFL{{apnu}}<
>SRFP{{apnp}}<
# La dirección y puerto del servidor AVL remoto
>SXADP0000d.plaspy.com;8888<
# Una dirección de destino que mantiene el destino del servidor
>SDA4;P00<
# Definición de señal solo por tiempo y distancia
>STD80300<
# Evento activado por la señal T&D
>SED37NV4;TD8+<
# Evento de informe por entrada
>SED05NV4;IP3+<
# fin
```

- El comando >SRT;CONFIG< se usa para borrar la configuración anterior y puede emplearse como paso inicial de reinicio si lo desea.
- >SRFA{{apn}}< establece la cadena APN. Reemplace {{apn}} por el APN de su operador.
- >SRFL{{apnu}}< y >SRFP{{apnp}}< fijan el usuario y la contraseña del APN cuando el operador los requiere.
- >SXADP0000d.plaspy.com;8888< define la entrada del servidor AVL remoto apuntando el dispositivo a Plaspy y al puerto 8888.
- Las definiciones de señal y los comandos de evento como >STD80300<, >SED37NV4;TD8+< y >SED05NV4;IP3+< habilitan reglas de reporte y disparadores de eventos que el dispositivo usa para enviar telemetría a Plaspy.

## Notas de configuración

- La disponibilidad de funciones y el firmware pueden variar entre revisiones de hardware y versiones de firmware del Syrus 3G+. Confirme los comandos de script soportados con las notas de la versión del dispositivo.
- Syrus Desk y el flujo de trabajo con archivos .tmf son un método común del fabricante para este modelo. Pueden existir métodos alternativos vía SMS u otros canales de configuración según firmware y herramientas del proveedor.
- Elija transporte UDP o TCP según las necesidades de su instalación; ambos son compatibles con Plaspy en el puerto 8888 y Plaspy detectará el protocolo del tracker automáticamente.
- Verifique siempre que la entrada del dominio del servidor sea exactamente d.plaspy.com o la IP proporcionada 54.85.159.138 y que el puerto esté en 8888, ya que Plaspy usa el mismo puerto entre dispositivos soportados.
- Mantenga una copia de la configuración original del dispositivo antes de realizar cambios para poder restaurar ajustes previos si es necesario.

## Por qué usar Plaspy con esta configuración

Usar el DCT Syrus 3G+ con Plaspy ofrece a los operadores una vía práctica para transmitir ubicación, eventos y telemetría de sensores a una única plataforma para visibilidad, alertas e informes históricos. El hardware del tracker y las herramientas de la plataforma Syrus facilitan la recopilación de telemetría multisensor, mientras que Plaspy ingiere y presenta esos datos para supervisión de flotas, protección de activos y análisis operativo.

Learn more about Plaspy and how to integrate devices at https://www.plaspy.com. For the most current device specific configuration details, firmware behavior, and official Syrus documentation consult the manufacturer at https://www.digitalcomtech.com/
