---
slug: /cantrack/tk200/configuration
id: tk200-configuration
sidebar_label: Configuration
title: CanTrack - TK200 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del CanTrack TK200 con ajustes de servidor Plaspy y ejemplos de comandos SMS
keywords:
  - Configuración CanTrack TK200
  - Instalación CanTrack TK200
  - Configuración TK200 Plaspy
  - Configuración rastreador GPS CanTrack
  - Configuración servidor TK200
  - Configuración rastreador GPS Plaspy
  - Rastreo vehicular TK200
  - Configuración SMS TK200
  - Configuración rastreador GPRS
  - Seguimiento de flotas CanTrack
---

# CanTrack - Configuración del TK200

Esta página documenta el contexto público de configuración para usar el CanTrack TK200 con la plataforma Plaspy. Explica los ajustes compartidos del servidor Plaspy que debe aplicar en el dispositivo y ofrece ejemplos prácticos de comandos SMS extraídos de la información pública de configuración del TK200. Use esta guía para preparar el rastreador para comunicarse con Plaspy y consulte la documentación del fabricante para detalles específicos del equipo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TK200 admite configuración por SMS o GPRS y los comandos de ejemplo a continuación usan el formato SMS público que se publica comúnmente para este modelo.

## Resumen de la configuración

El objetivo de configurar el TK200 para Plaspy es preparar el dispositivo para que envíe datos de posición y estado al endpoint del servidor Plaspy y verificar una conectividad confiable. Para los dispositivos TK200 esto normalmente implica establecer el APN y el servidor GPRS del equipo, definir intervalos de reporte y corroborar la zona horaria y la contraseña correctas.

- Establecer el servidor GPRS del dispositivo en Plaspy para que el rastreador informe al endpoint compartido d.plaspy.com o a su dirección IP.
- Configurar el APN del operador celular y sus credenciales para que el dispositivo pueda abrir una sesión de datos GPRS.
- Definir el intervalo de reporte para que Plaspy reciba actualizaciones periódicas de posición.
- Ajustar la zona horaria del equipo y verificar la precisión del reloj para marcas de tiempo correctas.
- Opcionalmente restaurar ajustes de fábrica antes de una configuración masiva al preparar una unidad nueva o devuelta.
- Validar que el dispositivo sea visible y esté reportando en Plaspy luego de aplicar la configuración.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta y utiliza el mismo puerto para todos los dispositivos compatibles

## Requisitos típicos antes de la configuración

- Un CanTrack TK200 con alimentación y una tarjeta SIM activa que tenga datos habilitados y el APN correcto
- La contraseña del dispositivo o PIN de administrador para la configuración por SMS; en los ejemplos públicos se usa el valor por defecto 123456
- Acceso al método de comandos SMS del fabricante o al software oficial de configuración del TK200
- Conocer el APN de la red móvil, el nombre de usuario APN y la contraseña APN de la SIM que utilizará
- Señal celular estable en el lugar de instalación para una conectividad GPRS confiable
- Un plan de pruebas para confirmar que el dispositivo aparece en Plaspy después de la configuración

## Cómo se conecta este rastreador a Plaspy

El TK200 puede configurarse para enviar datos de ubicación y eventos a Plaspy usando GPRS hacia el endpoint y puerto compartidos de Plaspy. Cuando está correctamente configurado, el rastreador establecerá una sesión de datos con el servidor Plaspy y transmitirá reportes periódicos y alarmas para que los dispositivos sean visibles y monitoreados en la plataforma.

- El dispositivo abre una conexión GPRS y envía reportes de posición a d.plaspy.com en el puerto 8888
- Plaspy acepta transporte UDP o TCP y detectará automáticamente el protocolo del rastreador
- Los reportes periódicos y las alarmas se entregan a Plaspy para que los operadores puedan seguir el movimiento y el estado del dispositivo
- SMS puede usarse para la configuración inicial y para comandos remotos si aún no se ha establecido GPRS
- Una conexión exitosa resulta en que el dispositivo aparezca y reporte dentro de la plataforma Plaspy

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración del fabricante para el TK200, como comandos SMS o la herramienta de configuración de CanTrack.
2. Si usa configuración por SMS, prepare la contraseña de administrador del dispositivo y las credenciales APN de la SIM que instalará.
3. Ingrese el servidor Plaspy por nombre o por IP usando d.plaspy.com o 54.85.159.138 como endpoint.
4. Establezca el puerto del servidor en 8888 en la configuración del dispositivo y elija UDP o TCP si el equipo requiere selección de transporte.
5. Configure el APN y los parámetros de reporte para que el dispositivo pueda abrir una sesión GPRS y enviar datos a Plaspy.
6. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones del fabricante lo requieren.
7. Valide que el rastreador reporte a Plaspy comprobando la visibilidad del dispositivo y las actualizaciones de posición recientes en la plataforma.

## Comandos de configuración de ejemplo

Los siguientes comandos SMS son ejemplos públicos comúnmente usados para configurar el TK200. Conservan los marcadores de posición cuando corresponde. La contraseña de ejemplo del dispositivo en estos comandos es 123456, que se publica como valor predeterminado en la configuración de ejemplo. Envíe cada línea como un SMS separado desde un número autorizado.

- Restauración opcional a configuración de fábrica (usar solo cuando sea necesario para la configuración inicial)
```
begin123456
```

- Ajustar la zona horaria a UTC 0
```
timezone123456 0
```

- Establecer el APN del operador
```
apn123456 {{apn}} {{apnu}} {{apnp}}
```
Explicación: reemplace {{apn}} con el APN de su operador, {{apnu}} con el nombre de usuario APN si es necesario y {{apnp}} con la contraseña APN si corresponde. Deje los marcadores vacíos si no se usan.

- Establecer el intervalo de actualización a 120 segundos
```
ITV123456 120 120
```
Explicación: el ejemplo fija el intervalo de reporte en 120 segundos para actualizaciones periódicas de posición.

- Configurar el servidor GPRS en Plaspy usando la IP pública y el puerto
```
adminip123456 54.85.159.138 8888
```
También puede usar el dominio del servidor en lugar de la IP cuando el método de configuración del dispositivo lo permita: d.plaspy.com y puerto 8888.

## Notas de configuración

- La configuración por SMS es un método publicado comúnmente para el TK200; las herramientas del fabricante o el firmware también pueden ofrecer alternativas por USB o mediante la SIM.
- Diferentes versiones de firmware y revisiones de hardware pueden cambiar el formato exacto de los comandos, los parámetros disponibles o el orden requerido de los comandos.
- El dispositivo puede usar UDP o TCP como transporte. Plaspy acepta ambos y detectará automáticamente el protocolo del rastreador.
- Confirme siempre las credenciales APN con el operador móvil y pruebe que el dispositivo puede abrir una sesión GPRS antes de un despliegue a gran escala.
- Al usar el comando adminip, puede suministrar d.plaspy.com o la IP 54.85.159.138 y debe establecer el puerto 8888 para que coincida con los ajustes del servidor Plaspy.

## ¿Por qué usar Plaspy con esta configuración?

Configurar el CanTrack TK200 para que reporte a Plaspy ofrece una forma sencilla de centralizar el seguimiento, recibir alertas de eventos y monitorear la salud de los dispositivos en una flota o en un conjunto de dispositivos personales. Usar los ajustes de servidor compartidos de Plaspy simplifica los despliegues a gran escala porque todos los dispositivos usan el mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador al conectarse.

Para obtener más información sobre Plaspy y cómo soporta la visibilidad de dispositivos y el monitoreo de flotas visite https://www.plaspy.com. Para los comandos específicos más recientes del dispositivo, notas de firmware y detalles de configuración, verifique la información en el sitio web del fabricante https://www.cantrackgps.com/ ya que las especificaciones y métodos de configuración pueden cambiar con el tiempo.
