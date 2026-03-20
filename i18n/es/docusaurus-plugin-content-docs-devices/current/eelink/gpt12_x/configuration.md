---
slug: /eelink/gpt12_x/configuration
id: gpt12_x-configuration
sidebar_label: Configuration
title: EElink - GPT12‑X Configuration
sidebar_class_name: menu_item_tracker
description: Configure el EElink GPT12‑X para Plaspy usando comandos SMS públicos y ajustes de servidor compartidos para ingestión fiable de telemetría
keywords:
  - Configuración EElink GPT12‑X
  - Instalación EElink GPT12‑X
  - GPT12‑X Plaspy
  - Configuración GPS GPT12‑X
  - Configuración de servidor EElink
  - Configuración de rastreador Plaspy
  - Configuración SMS rastreador GPS
  - Protocolo EELINK Plaspy
  - Configuración para rastreador GPS en modo de espera prolongado
  - Configuración de rastreadores para flotas
---

# EElink - Configuración GPT12‑X

Esta página documenta el contexto público de configuración para usar el rastreador EElink GPT12‑X con Plaspy. Se centra en los ajustes prácticos del servidor y en los comandos SMS que provee el fabricante para apuntar el dispositivo a Plaspy para la ingestión de telemetría y alarmas, y destaca los parámetros compartidos que Plaspy espera recibir.

Plaspy utiliza ajustes de servidor compartidos entre los rastreadores compatibles y detecta automáticamente el protocolo una vez que el dispositivo comienza a reportar. Los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la variante de hardware, el tipo de instalación y las herramientas del proveedor, por lo que debe usar esta guía junto con la documentación oficial de EElink y las notas de firmware de su dispositivo.

## Resumen de la configuración

Esta configuración prepara el GPT12‑X para enviar datos de ubicación y eventos a Plaspy usando el protocolo público EELINK y el endpoint compartido de Plaspy. El objetivo es asegurar que el rastreador sea accesible desde la red celular, tenga el APN y parámetros de servidor correctos, y se verifique que esté reportando en Plaspy.

- Configure APN y ajustes GPRS para que el dispositivo pueda establecer conectividad celular y enviar datos.
- Apunte el rastreador a Plaspy usando el endpoint y puerto compartidos para que la telemetría llegue a Plaspy.
- Valide la frecuencia de reporte y los intervalos de actualización para equilibrar la autonomía de la batería con las necesidades de reporte.
- Confirme que el dispositivo está reportando usando el comando de verificación y observando el dispositivo en Plaspy.
- Guarde los ajustes y reinicie el rastreador si es necesario para activar la nueva configuración de servidor.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888 según lo requiera el dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador después de que el dispositivo comienza a reportar

Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detectará el protocolo automáticamente, por lo que configurar el endpoint y el puerto del servidor como se indica arriba es el requisito principal del lado del servidor.

## Requisitos típicos antes de la configuración

- Una unidad GPT12‑X con batería cargada y acceso a la alimentación o batería listos para configuración.
- Una tarjeta SIM celular válida con datos habilitados y la información APN correcta para el mercado del dispositivo.
- Acceso a un remitente de SMS o a la herramienta oficial de configuración de EElink si su despliegue requiere enviar comandos SMS.
- El manual del producto EElink o las notas de firmware para GPT12‑X para confirmar los formatos de comando y cualquier comportamiento específico del dispositivo.
- Un plan para validar el reporte en Plaspy después de la configuración revisando la telemetría y las alarmas en la plataforma.
- Acceso administrativo a cualquier herramienta de gestión remota que use para configuraciones masivas o actualizaciones OTA.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para usar Plaspy, el GPT12‑X envía mensajes compactos de telemetría y alarmas al endpoint y puerto compartidos de Plaspy para que Plaspy pueda ingerir datos GNSS, batería y eventos para mapeo y alertas. Plaspy recibe los mensajes del dispositivo y detectará automáticamente el protocolo EELINK para encargarse de la decodificación y el enrutamiento.

- El rastreador envía paquetes de posición y telemetría a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Puede configurar el dispositivo para usar transporte UDP o TCP en el puerto 8888 según las opciones de firmware del equipo.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que se usan las mismas configuraciones de servidor y puerto en los dispositivos compatibles.
- Los mensajes de telemetría y alarma aparecen en los paneles de Plaspy para monitoreo en tiempo real, geovallas e informes históricos.
- La validación de conectividad se completa confirmando que los reportes llegan a Plaspy después de aplicar la configuración.

## Flujo de trabajo común de configuración

1. Acceda al método de configuración oficial de EElink para su unidad GPT12‑X, como la configuración por SMS o la herramienta del fabricante, y lea las notas de firmware.
2. Ingrese la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 según el método de instalación.
3. Configure el puerto del servidor en 8888.
4. Seleccione UDP o TCP si el dispositivo requiere elegir el transporte al configurar los parámetros del servidor.
5. Configure el APN del dispositivo y las credenciales del operador necesarias para que el rastreador abra una sesión GPRS o de datos celulares.
6. Aplique o guarde la configuración y reinicie el dispositivo si el rastreador necesita un reinicio para aplicar los nuevos ajustes.
7. Valide que el dispositivo reporte a Plaspy comprobando la llegada de telemetría y utilizando el comando de verificación del rastreador cuando esté disponible.

## Comandos de configuración de ejemplo

El GPT12‑X soporta comandos de configuración vía SMS. Los siguientes comandos públicos por SMS son provistos por el fabricante y pueden enviarse en el orden mostrado. La nomenclatura sigue la sintaxis del fabricante donde los comandos terminan con un símbolo de almohadilla.

- Reinicio de fábrica inicial opcional (usar solo si necesita restaurar valores por defecto):
```text
FACTORY#
```

- Ajustar la zona horaria a UTC 0 (ejemplo):
```text
GMT,E,0#
```

- Configurar el APN del operador. Reemplace [apn] con el APN de su red. Si su operador requiere usuario o contraseña, incluya [apnu] y [apnp] según lo proporcione su operador de SIM. Los marcadores de usuario y contraseña son opcionales y solo se requieren si su APN los necesita:
```text
APN,[apn]{{,[apnu],[apnp]}}#
```
Nota: Si su dispositivo o cliente SMS no soporta el formato compacto de marcadores, envíe APN,[apn],[apnu],[apnp]# y omita los campos de usuario o contraseña que no necesite.

- Configurar el servidor GPRS usando el dominio de Plaspy y el puerto:
```text
SERVER,1,d.plaspy.com,8888#
```

- O configurar el servidor GPRS usando la IP de Plaspy y el puerto:
```text
SERVER,0,54.85.159.138,8888#
```

- Establecer el intervalo de reporte a cada 60 segundos:
```text
TIMER,60#
```

- Verificar parámetros actuales del dispositivo:
```text
PARAM#
```

Preserve el orden anterior para la configuración inicial cuando sea necesario. Los comandos SERVER muestran la opción de dominio e IP; elija la que sea apropiada para su entorno. El dispositivo puede aceptar ajustes de transporte TCP o UDP al configurar el servidor, dependiendo del firmware; asegúrese de seleccionar el transporte que su instalación requiera.

## Notas de configuración

- Las revisiones de firmware y hardware pueden alterar la sintaxis exacta de los comandos SMS o los parámetros disponibles; siempre verifique el manual del EElink GPT12‑X para notas específicas del firmware.
- Este ejemplo muestra la configuración basada en SMS como una opción pública. Si utiliza la herramienta del fabricante o una solución MDM, use campos equivalentes para APN, servidor y puerto.
- Elija UDP o TCP según el soporte de la red y del firmware. Plaspy soporta ambos en el puerto 8888 y detectará automáticamente el protocolo del rastreador.
- Mantenga los marcadores [apn], [apnu] y [apnp] intactos al preparar scripts masivos y reemplácelos por los valores específicos del operador antes de enviar.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles, lo que simplifica despliegues a gran escala; confirme la conectividad en Plaspy después de aplicar los ajustes.

## Por qué usar Plaspy con esta configuración

Usar el GPT12‑X con Plaspy ofrece una solución de telemetría de bajo mantenimiento para organizaciones que necesitan seguimiento de largo plazo fiable, alarmas de eventos y visibilidad centralizada. Los ajustes de servidor compartidos y la detección automática de protocolo de Plaspy reducen la complejidad de configuración por dispositivo, de modo que usted puede concentrarse en la escala del despliegue y el monitoreo operativo en lugar de gestionar endpoints de servidor únicos.

Para saber más sobre Plaspy y cómo maneja la integración de dispositivos y el monitoreo de flotas visite https://www.plaspy.com. Para los detalles más recientes sobre la instalación específica del dispositivo, comportamiento de firmware y comandos oficiales del fabricante, por favor verifique la información en el sitio web de EElink https://www.eelink.com.cn/. Las especificaciones del fabricante y los métodos de configuración pueden cambiar con el tiempo, por lo que debe confirmar los detalles antes de realizar despliegues a gran escala.
