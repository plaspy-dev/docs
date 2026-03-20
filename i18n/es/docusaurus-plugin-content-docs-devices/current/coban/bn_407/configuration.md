---
slug: /coban/bn_407/configuration
id: bn_407-configuration
sidebar_label: Configuration
title: Coban - BN-407 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para Coban BN-407 y compatibilidad con Plaspy con comandos SMS y ajustes de servidor
keywords:
  - Configuración Coban BN-407
  - Configuración BN-407 para Plaspy
  - Configuración tracker GPS Coban
  - Configuración servidor BN-407
  - Configuración de dispositivo Plaspy
  - Configuración rastreador para bicicleta
  - Comandos SMS para rastreador GPS
  - Ajustes de servidor Plaspy
  - Configuración GPRS BN-407
  - Integración rastreador GNSS
---

# Coban - Configuración del BN-407

Esta página documenta el contexto público de configuración para usar el rastreador Coban BN-407 con Plaspy. Describe los ajustes de servidor compartidos que Plaspy requiere, el flujo típico de puesta en marcha y los comandos SMS públicos del BN-407 para que pueda preparar el dispositivo y así comunicarse con Plaspy para seguimiento en tiempo real y reporte de eventos.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el lado del fabricante pueden variar según la versión del firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El BN-407 soporta configuración por SMS y reporte por GPRS; los ejemplos más abajo usan los comandos SMS públicos del fabricante con la contraseña de muestra 123456.

## Resumen de la configuración

Este proceso prepara el BN-407 para enviar ubicación y telemetría a Plaspy usando el endpoint y puerto compartidos de la plataforma, verifica la conectividad y habilita la visibilidad y las alertas en Plaspy. El BN-407 puede configurarse mediante comandos SMS (común en instalaciones ocultas) para ajustar el APN, la dirección del servidor, los intervalos de actualización y el modo de transporte.

- Configure el APN y credenciales del dispositivo para que el rastreador pueda acceder a Plaspy mediante datos móviles.
- Apunte el rastreador al endpoint y puerto del servidor de Plaspy usados para todos los dispositivos.
- Seleccione UDP o TCP como transporte si el rastreador requiere especificar uno.
- Establezca intervalos de actualización y notificación de alarmas para que Plaspy reciba mensajes regulares de ubicación y eventos.
- Valide la conectividad del dispositivo y confirme que está reportando a Plaspy para que sea visible en la plataforma.

## Ajustes del servidor de Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Requisitos típicos antes de la configuración

- Un BN-407 cargado con la contraseña de fábrica conocida (la contraseña por defecto de ejemplo mostrada abajo es 123456).
- Una tarjeta SIM activa con datos habilitados y los datos APN correctos del operador móvil.
- Acceso al método de configuración por SMS del fabricante o a la herramienta oficial de configuración.
- Acceso básico al dispositivo (capaz de enviar comandos SMS o conectarse mediante la herramienta del proveedor) y la documentación del fabricante.
- Un plan de pruebas de conectividad para confirmar que el dispositivo reporta a Plaspy después de la configuración.

## Cómo este rastreador se conecta a Plaspy

Al configurarse para Plaspy, el BN-407 envía mensajes de ubicación y eventos a través de la red móvil al endpoint y puerto compartidos del servidor de Plaspy. Plaspy ingiere esos mensajes, detecta automáticamente el protocolo del dispositivo y muestra la posición, el historial y las alertas en la plataforma.

- El rastreador se configura para reportar al endpoint y puerto del servidor de Plaspy (d.plaspy.com o 54.85.159.138 en el puerto 8888).
- El transporte se establece en UDP o TCP según el firmware del dispositivo y la preferencia del instalador.
- Plaspy detecta e interpreta automáticamente el protocolo BN-407, por lo que no es necesario seleccionar manualmente el protocolo en Plaspy.
- Eventos como movimiento, geovalla, batería baja y otras alarmas se reenvían a Plaspy para notificaciones y reproducción de historial.
- Dado que Plaspy usa un único puerto para todos los dispositivos compatibles, la configuración del BN-407 solo necesita el endpoint común y que el puerto compartido sea accesible.

## Flujo típico de configuración

1. Acceda al método oficial de configuración del fabricante o al software provisto (comandos SMS o herramienta del proveedor) según lo indicado por Coban.
2. Introduzca la dirección del servidor de Plaspy como d.plaspy.com o la IP 54.85.159.138 según lo que acepte el comando del dispositivo.
3. Configure el puerto del servidor en 8888, que es el puerto que Plaspy utiliza para todos los dispositivos.
4. Elija UDP o TCP como transporte si el dispositivo solicita seleccionar uno.
5. Configure el APN y las credenciales APN para la SIM instalada, de modo que el BN-407 pueda usar datos móviles.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware del rastreador lo requiere.
7. Valide que el dispositivo reporta a Plaspy revisando el equipo en su cuenta de Plaspy y comprobando actualizaciones de posición recientes.

## Ejemplos de comandos de configuración

El BN-407 admite configuración vía SMS. Los comandos que siguen provienen de las instrucciones públicas del fabricante y conservan la contraseña de ejemplo 123456. Reemplace los valores de marcador de posición por los de su operador donde se indica.

Notas:
- La contraseña de muestra en estos comandos es 123456 (valor por defecto mostrado en la documentación pública). Considere cambiar la contraseña después de la configuración inicial.
- Los marcadores de posición aparecen como {{apn}}, {{apnu}} y {{apnp}} y deben sustituirse por el APN, usuario APN y contraseña APN de su operador respectivamente.

1. Restaurar a configuración de fábrica (paso inicial opcional)
```text
begin123456
```

2. Ajustar la zona horaria a UTC 0
```text
time zone123456 0
```

3. Establecer el APN del operador (reemplace {{apn}} por el APN de su operador)
```text
apn123456 {{apn}}
```

4. Configurar usuario y contraseña del APN (reemplace los marcadores por sus credenciales)
```text
up123456 {{apnu}} {{apnp}}
```

5. Establecer el servidor GPRS con la IP y puerto de Plaspy
```text
adminip123456 54.85.159.138 8888
```

6. Establecer el intervalo de actualización de localización (comando de ejemplo)
```text
fix060s060s***n123456
```

7. Cambiar a modo GPRS y seleccionar transporte
```text
gprs123456,1,1
```
o (forma alternativa)
```text
gprs123456
```

8. Verificar la configuración actual
```text
check123456
```

9. Habilitar reporte avanzado para estado de combustible o sensores digitales
```text
protocol123456 18
```

## Notas de configuración

- La configuración por SMS se usa con frecuencia en instalaciones ocultas, como rastreadores integrados en cuadro; siga la sintaxis SMS del fabricante exactamente y pruebe cuidadosamente.
- Diferentes versiones de firmware y revisiones del BN-407 pueden aceptar formatos de comando ligeramente distintos; confirme siempre la sintaxis con el manual del dispositivo.
- Algunos firmwares pueden aceptar un nombre de host en lugar de una IP para el servidor; el comando público del BN-407 mostrado arriba usa adminip con la dirección IP de Plaspy.
- Elija UDP o TCP según las condiciones de red y la compatibilidad del dispositivo. Plaspy acepta ambos transportes en el puerto compartido.
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que los valores críticos a configurar son el servidor y el puerto.

## Por qué usar Plaspy con esta configuración

Usar el Coban BN-407 con Plaspy ofrece seguimiento discreto y de bajo consumo para bicicletas, combinado con una configuración de servidor compartida que facilita despliegues homogéneos. Para flotas compartidas, operadores de alquiler o usos personales contra robo, configurar el BN-407 para reportar a Plaspy permite ubicación en vivo, alertas por eventos y reproducción histórica sin diferencias complejas por dispositivo.

Para conocer más sobre cómo Plaspy gestiona la ingestión y el seguimiento de dispositivos, visite https://www.plaspy.com. Para detalles específicos del BN-407, notas de firmware y la documentación completa del fabricante, confirme la información vigente en el sitio oficial de Coban en https://www.coban.net/ ya que las especificaciones y los pasos de configuración pueden cambiar con el tiempo.
