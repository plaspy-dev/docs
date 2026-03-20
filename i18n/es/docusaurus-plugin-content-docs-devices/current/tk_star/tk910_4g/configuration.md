---
slug: /tk_star/tk910_4g/configuration
id: tk910_4g-configuration
sidebar_label: Configuration
title: TK-Star - TK910 4G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar TK‑Star TK910 4G con los ajustes de servidor de Plaspy y comandos SMS
keywords:
  - Configuración TK-Star TK910 4G
  - Instalación TK910 4G para Plaspy
  - Configuración rastreador GPS TK-Star
  - Configuración servidor TK910 4G
  - Configuración dispositivo Plaspy
  - Instalación rastreador GPS para vehículos
  - Configuración seguimiento de flotas
  - Compatibilidad rastreador TK-Star Plaspy
  - Configuración SMS TK910 4G
  - Configuración APN TK910 4G
---

# TK-Star - Configuración del TK910 4G

Esta página describe el contexto público de configuración para usar el TK‑Star TK910 4G con la plataforma Plaspy. Resume los ajustes de servidor y el flujo de trabajo de configuración que normalmente necesitará al integrar este modelo con Plaspy, e incluye los comandos SMS suministrados por el fabricante para la configuración desde el dispositivo.

Plaspy utiliza valores de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, mientras que los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Donde estén disponibles los comandos del fabricante los incluimos aquí; siempre verifique la documentación oficial de TK‑Star para obtener las instrucciones específicas más recientes.

## Resumen de la configuración

El proceso de configuración prepara al TK910 4G para comunicarse de forma fiable con Plaspy ajustando el APN y los datos del servidor, seleccionando el transporte preferido y validando la conectividad. El objetivo es asegurar que el dispositivo envíe ubicación y telemetría de eventos a Plaspy para que la unidad aparezca en los paneles y active alertas según corresponda.

- Establecer el APN y las credenciales del dispositivo para que los datos móviles lleguen a Internet.
- Configurar el dispositivo para que reporte a Plaspy usando el punto de conexión y puerto compartidos.
- Elegir el transporte, por ejemplo UDP o TCP, si el rastreador requiere selección.
- Aplicar intervalos de reporte y modo GPRS para que el rastreador transmita actualizaciones periódicas de ubicación.
- Validar que el dispositivo sea visible en Plaspy y que se reciban las actualizaciones de ubicación y eventos.

## Ajustes de servidor de Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

Estos valores son los puntos finales públicos de Plaspy que se usan para apuntar al TK910 4G hacia el servicio de ingestión de Plaspy. Plaspy usa el mismo puerto para todos los dispositivos compatibles y trata de detectar el protocolo del dispositivo de forma automática.

## Requisitos típicos antes de comenzar

- Un TK910 4G instalado y con alimentación, con acceso a los SMS del dispositivo o a la herramienta de configuración del fabricante
- Una SIM celular activa con plan de datos y los ajustes APN correctos para su operador
- La contraseña predeterminada del dispositivo si se requiere para configuración por SMS, normalmente 123456 en los comandos del fabricante que se muestran
- Saber si va a usar transporte UDP o TCP si el rastreador exige una selección
- Acceso al manual oficial de TK‑Star o soporte del proveedor para instrucciones específicas de firmware
- Una cuenta o implementación de Plaspy donde pueda confirmar que el dispositivo está reportando después de la configuración

## Cómo se conecta este rastreador a Plaspy

El TK910 4G envía telemetría GNSS y de posicionamiento asistido a un punto de servidor configurado para que Plaspy pueda ingerir datos de ubicación, eventos y alarmas. Una vez configurado para apuntar a Plaspy, el rastreador transmitirá actualizaciones según el intervalo definido y Plaspy mostrará la ubicación en vivo, las alertas y la reproducción histórica.

- El rastreador se configura para reportar al punto de servidor y puerto compartidos de Plaspy descritos arriba
- Los mensajes de telemetría y eventos se entregan por el protocolo de transporte elegido UDP o TCP
- Plaspy recibe actualizaciones de ubicación, eventos de geocerca, alertas de exceso de velocidad y vibración para notificación al operador
- La visibilidad en la plataforma se valida cuando el dispositivo aparece y envía cargas regulares a Plaspy
- Plaspy correlaciona la telemetría recibida con funciones de la plataforma como alertas, mapas e historial de rutas

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial de TK‑Star para su dispositivo, por ejemplo comandos SMS, la herramienta de configuración del fabricante o la app.
2. Proporcione los ajustes APN de su operador celular para que el rastreador pueda usar datos móviles.
3. Indique la dirección del servidor de Plaspy ya sea como el dominio d.plaspy.com o la IP 54.85.159.138.
4. Establezca el puerto del servidor en 8888 en la configuración del dispositivo.
5. Elija UDP o TCP si el dispositivo requiere seleccionar el transporte.
6. Aplique o guarde la configuración y cambie el dispositivo al modo de datos GPRS si es necesario.
7. Reinicie el dispositivo si el firmware o las instrucciones del instalador lo recomiendan.
8. Valide que el dispositivo reporte a Plaspy y que la telemetría de ubicación y eventos aparezca en su implementación de Plaspy.

Si utiliza el flujo de comandos por SMS mostrado más abajo, envíe los comandos en el orden indicado y confirme cada respuesta cuando el dispositivo responda por SMS.

## Ejemplo de comandos de configuración

El fabricante TK‑Star proporciona un conjunto de comandos basado en SMS para configurar el TK910 4G. Los comandos a continuación usan la contraseña predeterminada del dispositivo 123456 cuando se requiere. Mantenga los marcadores de posición tal como aparecen y reemplácelos por su APN, nombre de usuario APN y contraseña APN según corresponda.

- Optional initial step to restore factory settings
```text
begin123456
```
- Set the operator APN
```text
apn123456 [apn]
```
- Set the APN username if required by your operator
```text
apnuser123456 [apnu]
```
- Set the APN password if required by your operator
```text
apnpasswd123456 [apnp]
```
- Set the GPRS server to the Plaspy IP and port
```text
adminip123456 54.85.159.138 8888
```
- Set the upload interval to 60 seconds
```text
upload123456 60
```
- Switch the device to GPRS mode
```text
gprs123456
```

Notas sobre los marcadores de posición
- [apn] es la cadena APN de su operador celular
- [apnu] es el nombre de usuario APN cuando el operador lo requiere
- [apnp] es la contraseña APN cuando el operador la requiere

Estos comandos SMS reflejan los ejemplos públicos del fabricante. Mantenga el orden de los comandos cuando el dispositivo lo requiera y cambie la contraseña predeterminada después de la configuración inicial si su política de despliegue lo solicita.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los comandos disponibles y su comportamiento. Verifique cualquier sintaxis de comando con la documentación de TK‑Star para su modelo y firmware exactos.
- El dispositivo admite configurar el servidor por IP como se muestra. Muchos instaladores también aceptan un dominio de servidor, y Plaspy puede referenciarse como d.plaspy.com en interfaces de plataforma o herramientas.
- Elija UDP o TCP según la preferencia del instalador y cualquier requisito de transporte; Plaspy acepta ambos en el puerto 8888 y detecta el protocolo automáticamente.
- La configuración por SMS es un método público común para el TK910 4G; utilice la herramienta del fabricante si está disponible para configuraciones masivas o remotas.
- Recuerde reemplazar marcadores de posición como [apn], [apnu] y [apnp] con los valores reales de su operador al enviar comandos.

## Por qué usar Plaspy con esta configuración

Usar el TK‑Star TK910 4G con Plaspy ofrece a las organizaciones visibilidad en tiempo real de la ubicación de vehículos, alertas y rutas históricas. Las funciones de GNSS asistido y las múltiples opciones de conectividad del dispositivo lo hacen práctico para rastrear motocicletas, automóviles y equipos ligeros, mientras Plaspy centraliza la telemetría, las notificaciones y la reproducción para monitoreo operativo y respuesta ante incidentes.

Para conocer más sobre Plaspy y cómo encaja esta configuración dentro de la plataforma visite https://www.plaspy.com. Para las instrucciones específicas más actuales del dispositivo, notas de firmware y sintaxis de comandos verifique los detalles en el sitio del fabricante https://www.tk-star.com/ antes de desplegar a gran escala.
