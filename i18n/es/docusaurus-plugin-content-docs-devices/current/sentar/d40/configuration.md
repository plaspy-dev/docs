---
slug: /sentar/d40/configuration
id: d40-configuration
sidebar_label: Configuration
title: Sentar - D40 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el smartwatch Sentar D40 para usar con Plaspy, incluye ajustes de servidor y comandos SMS
keywords:
  - Configuración Sentar D40
  - Instalación Sentar D40
  - Sentar D40 Plaspy
  - Configuración rastreador D40
  - Configuración GPS D40
  - Configuración smartwatch Sentar
  - Configuración rastreador Plaspy
  - Configuración smartwatch infantil
  - Configuración servidor dispositivo
  - Configuración GPRS rastreador
---

# Sentar - D40 Configuración

Esta página describe el contexto público de configuración para usar el smartwatch Sentar D40 con la plataforma Plaspy. Reúne los ajustes compartidos de servidor que necesita para apuntar el reloj a Plaspy y ejemplos de comandos SMS comúnmente publicados para el D40. Úsela como referencia práctica al preparar dispositivos para su monitoreo en Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor. El D40 admite configuración por SMS y una Nano SIM para datos celulares, por lo que los ejemplos a continuación reflejan los comandos SMS más habituales y los ajustes de servidor esenciales para que los reportes funcionen correctamente.

## Resumen de configuración

El objetivo al configurar un Sentar D40 para Plaspy es preparar el reloj para que se comunique de forma fiable con los servidores de Plaspy, validar la conectividad y asegurar que el dispositivo aparezca en el panel de Plaspy para ubicación y alertas. La configuración típicamente consiste en establecer la contraseña del dispositivo cuando sea necesario, aplicar el APN del operador, indicar el endpoint del servidor Plaspy y verificar los intervalos de reporte.

- Configure el APN del operador para que el reloj pueda usar la conexión de datos móviles.
- Apunte el D40 al servidor Plaspy d.plaspy.com o a la IP del servidor Plaspy para que la telemetría llegue correctamente.
- Asegúrese de que el intervalo de subida y el comportamiento de reporte sean adecuados para el monitoreo de un cuidador.
- Verifique los ajustes del dispositivo y confirme que el reloj está enviando datos a Plaspy antes de ponerlo en servicio.
- Use los comandos SMS publicados o la herramienta del fabricante para aplicar cambios según lo que el dispositivo soporte.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte por UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos típicos antes de la configuración

- Un D40 cargado con una Nano SIM activa y un plan de datos apropiado para GPRS o reportes celulares.
- Acceso al método oficial de configuración Sentar, como soporte de comandos SMS o la herramienta de configuración del proveedor.
- Conocimiento de la contraseña del dispositivo; los ejemplos del D40 usan la contraseña por defecto 123456 cuando procede.
- Información básica del APN del operador y, opcionalmente, usuario y contraseña del APN.
- Capacidad para recibir y enviar SMS al dispositivo si utiliza configuración vía SMS.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el D40 envía actualizaciones de ubicación, alertas y telemetría del dispositivo al endpoint y puerto compartidos de Plaspy para que los responsables puedan ver el estado y los eventos desde un panel centralizado. Plaspy recibe los paquetes entrantes y los asigna al dispositivo registrado usando el identificador del equipo y el protocolo que Plaspy detecta automáticamente.

- El dispositivo se configura para reportar al endpoint d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.
- La telemetría y la ubicación se transmiten por TCP o UDP según la selección del dispositivo y las condiciones de la red.
- Plaspy interpreta automáticamente el protocolo entrante y asocia la ubicación, las alertas SOS y la telemetría de batería con el dispositivo.
- Intervalos regulares de subida aseguran que el reloj aparezca en Plaspy para monitoreo en tiempo real y reportes históricos.
- La verificación de reportes confirma que el dispositivo es visible y está enviando los mensajes esperados a Plaspy.

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial de Sentar o al software del proveedor que aplica comandos SMS o parámetros al D40.
2. Configure los valores del APN del operador usando el formato de comando APN publicado o la herramienta del proveedor.
3. Introduzca el endpoint del servidor Plaspy usando d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor del dispositivo.
4. Establezca el puerto 8888 para reportes GPRS y elija UDP o TCP si el dispositivo requiere selección explícita del transporte.
5. Aplique o guarde la configuración en el dispositivo usando la herramienta del proveedor o enviando los comandos SMS.
6. Reinicie el dispositivo si el fabricante lo requiere para aplicar cambios de red y servidor.
7. Valide que el dispositivo reporte a Plaspy y aparezca en el panel de Plaspy con la telemetría y las actualizaciones de ubicación esperadas.

## Comandos de configuración de ejemplo

El D40 puede configurarse mediante comandos SMS. Los comandos de ejemplo abajo se basan en comandos públicos publicados para el dispositivo. La contraseña por defecto usada en estos ejemplos es 123456. Preserve los marcadores de posición [apn], [apnu] y [apnp] cuando sustituya por los valores de su operador.

- Restablecimiento de fábrica (opcional en la configuración inicial)
```text
pw,123456,factory#
```

- Ajustar la zona horaria a UTC 0
```text
pw,123456,lz,0,0#
```

- Consultar el IMSI del dispositivo o información MCC MNC
```text
pw,123456,imsi#
```

- Establecer el APN del operador donde [apn] es el nombre del APN, [apnu] es el usuario del APN, [apnp] es la contraseña del APN y xxxyy representa el sufijo MCC MNC opcional si se requiere
```text
pw,123456,[apn],[apnu],[apnp],xxxyy#
```

- Configurar el servidor GPRS al endpoint de Plaspy usando la IP del servidor Plaspy y puerto 8888
```text
pw,123456,ip,54.85.159.138,8888#
```

- Establecer el intervalo de subida de datos a 300 segundos
```text
pw,123456,upload,300#
```

- Consultar los ajustes actuales en el dispositivo
```text
pw,123456,ts#
```

Notas sobre los marcadores de posición y su uso
- [apn] Reemplace con la cadena APN de su operador.
- [apnu] Reemplace con el usuario del APN si el operador lo requiere; deje vacío u omita si no se usa.
- [apnp] Reemplace con la contraseña del APN si el operador la requiere; deje vacío u omita si no se usa.
- El comando de restablecimiento de fábrica es opcional y solo debe usarse cuando sea necesario un reinicio completo del dispositivo.
- Use el comando ts para verificar los ajustes después de aplicar los cambios.

## Notas de configuración

- Diferencias de firmware y variantes regionales de hardware pueden cambiar la sintaxis exacta de los comandos; confirme siempre con la documentación del fabricante si un comando falla.
- El D40 admite configuración por SMS como se muestra en los ejemplos; también puede utilizar cualquier utilidad oficial de configuración Sentar si la provee el proveedor.
- Elija UDP o TCP según la red y la capacidad del dispositivo; Plaspy acepta ambos en el puerto 8888 y detectará automáticamente el protocolo.
- Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detectará automáticamente el protocolo, por lo que es importante centrarse en el endpoint y puerto correctos al configurar.
- Verifique el APN y el registro en la red móvil antes de probar la conectividad al servidor para asegurarse de que el dispositivo pueda alcanzar Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el Sentar D40 con Plaspy centraliza las actualizaciones de ubicación, las alertas SOS y la telemetría del dispositivo para que los responsables y cuidadores puedan monitorear el estado y responder a eventos desde una sola plataforma. El soporte del D40 para datos celulares y aprovisionamiento por SMS facilita su integración en Plaspy con un conjunto reducido de cambios de servidor y APN.

Para saber más sobre Plaspy y cómo soporta integraciones de dispositivos visite https://www.plaspy.com. Para detalles específicos más recientes sobre configuración del dispositivo, notas de firmware y orientación del fabricante para el Sentar D40 consulte el sitio oficial de Sentar en http://www.sentarsmart.com/ ya que los métodos del fabricante y el comportamiento del firmware pueden cambiar con el tiempo.
