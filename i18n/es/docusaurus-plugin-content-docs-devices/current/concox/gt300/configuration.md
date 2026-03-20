---
slug: /concox/gt300/configuration
id: gt300-configuration
sidebar_label: Configuration
title: Concox - GT300 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador Concox GT300 y ajustes del servidor Plaspy
keywords:
- Configuración Concox GT300
- Instalación Concox GT300
- Configuración GT300 para Plaspy
- Configuración del servidor GT300
- Configuración rastreador GPS Concox
- Configuración SMS GT300
- Configuración de rastreador en Plaspy
- Configuración APN Concox GT300
- Configuración GPRS GT300
- Configuración plataforma rastreadores GPS
---

# Concox - Configuración GT300

Esta página describe el contexto público de configuración para usar el rastreador Concox GT300 con la plataforma Plaspy. Reúne los ajustes de servidor prácticos y ejemplos de comandos que comúnmente se emplean para dirigir dispositivos GT300 hacia Plaspy, de modo que puedan reportar ubicación, alertas y estado. El contenido aquí se centra en los comandos públicos provistos por el fabricante y en la información del servidor Plaspy necesaria para la integración.

Plaspy utiliza valores de servidor compartidos para los rastreadores soportados y detecta automáticamente el protocolo del dispositivo al conectarse. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor. Cuando aplica, esta guía incluye ejemplos de comandos SMS provistos por Concox para el GT300 y explica los marcadores de posición utilizados para el APN y otros valores del operador.

## Resumen de la configuración

Configurar el GT300 para Plaspy prepara el dispositivo para enviar datos de ubicación y eventos a Plaspy y permite que la plataforma muestre y monitoree el dispositivo. La secuencia típica de configuración define la zona horaria del dispositivo, el APN, el servidor GPRS de destino, el intervalo de reporte y activa el modo GPRS para que el rastreador pueda establecer una sesión de datos hacia Plaspy.

- Definir el APN del operador para que el dispositivo pueda abrir una conexión de datos GPRS
- Apuntar el GT300 al endpoint del servidor Plaspy usando el puerto compartido
- Elegir el tipo de transporte UDP o TCP si el dispositivo requiere selección de transporte
- Configurar un intervalo de reporte para controlar la frecuencia de envíos
- Activar el modo de red GPRS para que el dispositivo envíe datos a Plaspy y sea visible en la plataforma

## Valores del servidor Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888. Todos los dispositivos en Plaspy usan el mismo puerto para las conexiones al servidor.  
- Soporte de transporte: el dispositivo puede configurarse para usar UDP o TCP en el puerto 8888  
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Estos son los valores públicos de servidor que usará al apuntar un GT300 hacia Plaspy. Puede usar tanto el dominio como la dirección IP al configurar el dispositivo.

## Requisitos típicos antes de la configuración

- Un Concox GT300 cargado y funcionando con acceso a los controles del propietario o instalador del dispositivo  
- Una tarjeta SIM activa con plan de datos móviles y el APN correcto del operador  
- Capacidad para enviar SMS al dispositivo si usa comandos de configuración vía SMS (comandos proporcionados por el fabricante)  
- Acceso al método de configuración oficial de Concox o a la documentación para la versión de firmware de su GT300  
- Una cuenta en Plaspy y la posibilidad de registrar o identificar el dispositivo en la plataforma para su monitoreo

## Cómo se conecta este rastreador a Plaspy

El GT300 se configura para abrir una sesión de datos GPRS hacia el endpoint del servidor Plaspy y enviar informes periódicos de ubicación y eventos. Una vez que el dispositivo se conecta a d.plaspy.com o a 54.85.159.138 en el puerto 8888, la plataforma Plaspy detectará el protocolo y procesará los mensajes entrantes para mostrarlos en la plataforma.

- El rastreador abre una conexión GPRS utilizando el APN y credenciales configuradas si son requeridas  
- Los reportes del dispositivo se envían al endpoint de servidor configurado en d.plaspy.com o directamente a 54.85.159.138  
- Los datos se transmiten por el protocolo de transporte seleccionado, UDP o TCP, en el puerto 8888  
- Plaspy recibe los mensajes entrantes y detecta automáticamente el protocolo del rastreador para su procesamiento  
- Informes temporizados y mensajes de evento (SOS, geovalla, batería baja) se pueden reenviar a Plaspy una vez conectado

## Flujo común de configuración

1. Acceda al método de configuración oficial de Concox para el GT300, típicamente comandos SMS o una herramienta autorizada, y confirme la versión de firmware del dispositivo.  
2. Configure el APN del operador usando el marcador [apn] correspondiente a su proveedor de SIM.  
3. Introduzca la dirección del servidor Plaspy usando d.plaspy.com o la IP 54.85.159.138.  
4. Establezca el puerto del servidor en 8888. Plaspy utiliza el mismo puerto para todos los dispositivos soportados.  
5. Elija UDP o TCP como transporte si el GT300 le solicita seleccionar el tipo de transporte.  
6. Aplique y guarde la configuración en el dispositivo y reinícielo si el fabricante lo requiere.  
7. Verifique que el dispositivo reporte a Plaspy revisando la actividad del dispositivo en la plataforma y, si está disponible, mediante el comando de verificación del dispositivo.

## Comandos de configuración de ejemplo

El GT300 admite configuración por SMS. A continuación se muestran los comandos SMS públicos proporcionados para configurar el dispositivo y que reporte a Plaspy. Envíe cada comando como un SMS al número de la SIM del dispositivo. Conserve el formato exacto y el símbolo numeral final donde se indica.

- Reinicio de fábrica opcional (usar solo cuando sea necesario)
```text
FACTORY#
```

- Ajustar la zona horaria a UTC 0
```text
GMT,E,0#
```

- Establecer el APN del operador. Reemplace [apn] con el APN de su operador. Si su operador requiere usuario o contraseña, use [apnu] y [apnp] respectivamente donde se soporte
```text
APN,[apn]# 
```
o, cuando se usan usuario y contraseña (marcadores)
```text
APN,[apn],[apnu],[apnp]#
```

- Establecer el servidor GPRS para usar el dominio de Plaspy (recomendado) y el puerto 8888
```text
SERVER,1,d.plaspy.com,8888,0#
```

- Alternativamente establecer el servidor GPRS usando la IP de Plaspy y el puerto 8888
```text
SERVER,0,54.85.159.138,8888,0#
```

- Fijar el intervalo de subida periódico a cada 60 segundos
```text
TIMER,60#
```
o formato alternativo de timer
```text
TIMER,60,60#
```

- Activar el modo GPRS en el dispositivo
```text
GPRSON,1#
```

- Verificar los parámetros actuales de GPRS y servidor
```text
GPRSSET#
```

Notas sobre marcadores de posición: [apn] es el nombre del punto de acceso (APN) de su operador de SIM. [apnu] y [apnp] son valores opcionales de usuario y contraseña requeridos por algunos operadores móviles. Reemplace los marcadores con los valores reales proporcionados por su operador.

## Notas de configuración

- La configuración vía SMS es compatible con el GT300; asegúrese de enviar los mensajes desde un número de confianza si el dispositivo aplica permisos de control por SMS.  
- Diferencias de firmware pueden cambiar los comandos disponibles o el formato de parámetros; verifique el soporte de comandos para la revisión de firmware de su GT300.  
- Use el dominio d.plaspy.com cuando sea posible para permitir cambios de IP transparentes; la IP 54.85.159.138 está disponible como alternativa explícita.  
- Elija UDP o TCP según las necesidades de la instalación; Plaspy acepta ambos y realiza la detección de protocolo al recibir los mensajes.  
- Mantenga un registro de los comandos enviados y las respuestas del dispositivo para validar la aplicación correcta de los ajustes.

## Por qué usar Plaspy con esta configuración

Usar el GT300 con Plaspy ofrece una forma sencilla de recopilar informes de ubicación y eventos para seguimiento de activos pequeños y seguridad personal. Apuntar el dispositivo al endpoint y puerto compartidos de Plaspy permite que la plataforma ingiera los mensajes y muestre el dispositivo en mapas en tiempo real, alertas y paneles de reporte para visibilidad operativa.

Aprenda más sobre Plaspy y cómo funciona con dispositivos como el Concox GT300 en https://www.plaspy.com. Para detalles específicos de configuración más actualizados, notas de firmware y referencias oficiales de comandos, consulte el sitio del fabricante en https://www.iconcox.com/. Las especificaciones del fabricante y los métodos de configuración pueden cambiar con el tiempo, así que confirme cualquier ajuste crítico antes de implementaciones a gran escala.
