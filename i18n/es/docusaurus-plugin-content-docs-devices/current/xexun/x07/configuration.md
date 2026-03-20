---
slug: /xexun/x07/configuration
id: x07-configuration
sidebar_label: Configuration
title: Xexun - X07 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Xexun X07 con ajustes de servidor Plaspy, comandos SMS y pasos de integración
keywords:
  - configuración Xexun X07
  - instalación Xexun X07
  - configuración servidor Xexun X07
  - Xexun X07 Plaspy
  - configuración rastreador X07
  - configuración GPS X07
  - configuración wearable Xexun
  - configuración reloj de salud Xexun
  - configuración dispositivo Plaspy
  - configuración rastreador GPS
---

# Xexun - Configuración del X07

Esta página documenta el contexto público de configuración para usar el wearable Xexun X07 con Plaspy. Se concentra en los ajustes prácticos del servidor, los prerequisitos habituales y los comandos SMS que normalmente se usan para apuntar un X07 a Plaspy y reportar ubicación y telemetría. Use este contenido junto con la documentación del fabricante para detalles específicos del dispositivo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El X07 puede configurarse mediante comandos SMS como los que se muestran más abajo y soporta redes celulares tanto para datos como para configuración por SMS cuando sea necesario.

## Resumen de la configuración

El proceso de configuración prepara el X07 para comunicarse con Plaspy de modo que la ubicación y la telemetría de salud sean visibles en la plataforma. Los objetivos habituales son establecer el APN del operador, apuntar el dispositivo al endpoint de ingestión de Plaspy, confirmar los ajustes de transporte y validar la frecuencia de reporte para que el dispositivo aparezca en Plaspy.

- Configurar el APN del operador y, si aplica, el usuario y la contraseña del APN para que el dispositivo use datos móviles.
- Definir el endpoint del servidor GPRS a d.plaspy.com o la IP de Plaspy y el puerto requerido para que los reportes lleguen a Plaspy.
- Seleccionar el transporte UDP o TCP en el dispositivo si fuera necesario y ajustar el intervalo de reporte según las necesidades de monitoreo.
- Validar que el dispositivo esté reportando a Plaspy y sea visible en el panel de Plaspy o a través de la telemetría de la plataforma.
- Opcionalmente restaurar los valores de fábrica antes de configurar cuando se realiza una instalación limpia.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos compatibles

Estos valores son el endpoint público de Plaspy utilizado para recibir telemetría de rastreadores compatibles, incluyendo el X07.

## Requisitos típicos antes de la configuración

- Batería del dispositivo cargada y una verificación básica del estado del dispositivo antes de comenzar.
- Una SIM activa con plan de datos y capacidad de SMS apropiada para su región y operador.
- Acceso al método oficial de configuración Xexun, como comandos SMS o herramientas de configuración del proveedor.
- Conocimiento de la contraseña del dispositivo si es necesaria para los comandos SMS; la contraseña por defecto que aparece en documentación pública suele ser 123456.
- Cobertura de red que soporte las bandas celulares del dispositivo para el envío de datos.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el X07 reenvía posición y telemetría al endpoint compartido de ingestión de Plaspy. Plaspy normaliza los mensajes entrantes para que cuidadores y equipos operativos puedan ver ubicación, alertas y estado del dispositivo en un solo lugar.

- El X07 envía reportes periódicos de ubicación y telemetría a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según la configuración del dispositivo; Plaspy acepta cualquiera de los dos en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesario seleccionar un protocolo por dispositivo desde la plataforma.
- Los reportes son visibles en Plaspy para monitoreo en tiempo real, rutas históricas y alertas configuradas como geocercas.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración Xexun o al software del proveedor, o prepárese para enviar comandos SMS si usará el flujo de configuración por SMS.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto del dispositivo a 8888, que Plaspy usa para todos los dispositivos compatibles.
4. Elija UDP o TCP en el dispositivo si requiere selección de transporte.
5. Configure el APN de su operador móvil y proporcione usuario y contraseña del APN si el operador lo exige.
6. Aplique o guarde la configuración y reinicie el dispositivo si este requiere reinicio.
7. Valide que el dispositivo reporte a Plaspy observando la actividad en el panel de Plaspy o confirmando la telemetría entrante en los registros.

## Ejemplos de comandos de configuración

El X07 puede configurarse enviando comandos SMS al dispositivo. Los siguientes comandos provienen de ejemplos públicos de configuración. La contraseña de ejemplo usada en estos comandos es 123456, que figura como valor por defecto en la documentación pública. Si su contraseña es distinta, reemplace 123456 por la contraseña real del dispositivo.

- Restauración inicial de fábrica opcional (usar solo si desea restablecer el dispositivo):
```text
begin123456
```

- Establecer el APN del operador (reemplazar {{apn}} con el APN de su operador):
```text
apn123456 {{apn}}
```

- Establecer el usuario del APN si su operador lo requiere (reemplazar {{apnu}} con el usuario APN):
```text
apnuser123456 {{apnu}}
```

- Establecer la contraseña del APN si su operador lo requiere (reemplazar {{apnp}} con la contraseña APN):
```text
apnpasswd123456 {{apnp}}
```

- Configurar el servidor GPRS a Plaspy usando la IP pública y el puerto:
```text
adminip123456 54.85.159.138 8888
```

- Activar el modo GPRS si el dispositivo lo requiere:
```text
gprsmode123456
```

- Establecer el intervalo de reporte a 60 segundos (ejemplo de comando de intervalo):
```text
t060s***n123456
```

Notas sobre los marcadores:
- {{apn}} es la cadena APN del operador móvil necesaria para datos.
- {{apnu}} es el usuario del APN si su operador lo exige.
- {{apnp}} es la contraseña del APN si su operador la exige.

Conserve la sustitución correcta de la contraseña al enviar comandos SMS y asegúrese de que su firmware acepte configuración por SMS.

## Notas de configuración

- La configuración por SMS es un método público común para esta familia de dispositivos; confirme el soporte de comandos SMS en su firmware específico.
- Las revisiones de firmware y hardware pueden cambiar la sintaxis o el comportamiento de los comandos. Verifique los comandos contra la documentación del fabricante antes de desplegar masivamente.
- Al elegir entre UDP o TCP tenga en cuenta que afectan la confiabilidad y la entrega; seleccione el transporte que mejor se ajuste a sus necesidades operativas y a las recomendaciones del operador.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que no es necesario seleccionar el protocolo desde la plataforma.
- Use el comando de restablecimiento de fábrica únicamente cuando sea necesario, ya que borra la configuración existente.

## Por qué usar Plaspy con esta configuración

Configurar el Xexun X07 para reportar a Plaspy centraliza la ubicación y la telemetría de salud, de modo que cuidadores y equipos operativos puedan monitorear a los usuarios en tiempo real, recibir alertas de geocercas y revisar movimientos históricos. Para organizaciones que gestionan seguridad personal o cuidado de adultos mayores, combinar el wearable X07 con Plaspy ofrece un entorno único de monitoreo tanto de ubicación como de datos vitales.

Learn more about Plaspy on the main website https://www.plaspy.com and verify device specific configuration methods and the latest firmware details at the manufacturer site https://www.xexun.com/. Manufacturer specifications and setup procedures can change over time so confirm current instructions on the official Xexun documentation before final deployment.
