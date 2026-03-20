---
slug: /eelink/tk319_h/configuration
id: tk319_h-configuration
sidebar_label: Configuration
title: EElink - TK319‑H Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el EElink TK319‑H para reportar a Plaspy vía SMS o GPRS
keywords:
  - Configuración EElink TK319-H
  - Instalación EElink TK319-H
  - Configuración TK319 H Plaspy
  - Configuración de dispositivo Plaspy
  - Configuración MoveLink EELINK
  - Configuración rastreador GPS EElink
  - Configuración rastreador de vehículos
  - Configuración de seguimiento de flotas
  - Configuración de servidor TK319 H
  - Integración rastreador GPS Plaspy
---

# EElink - Configuración del TK319‑H

Esta página documenta el contexto público de configuración para utilizar el rastreador EElink TK319‑H con la plataforma Plaspy. Se centra en la información práctica de servidor y ajustes que puede aplicar o verificar al preparar un TK319‑H para que informe ubicación y telemetría a Plaspy. Cuando los comandos del fabricante son públicos se incluyen como ejemplos y se mantienen en su orden original.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TK319‑H soporta configuración por SMS y ajustes de servidor GPRS como los que se muestran a continuación, pero siempre verifique los detalles del dispositivo contra la documentación del fabricante y el firmware de su equipo.

## Resumen de la configuración

El objetivo de este flujo de configuración es preparar el TK319‑H para comunicarse de forma fiable con Plaspy y validar que el dispositivo aparezca en la plataforma. Los comandos públicos incluidos más abajo muestran una ruta de configuración común por SMS utilizada por instaladores y equipos de soporte.

- Configure el APN del equipo para que pueda usar datos móviles en conexiones GPRS con Plaspy.
- Apunte el dispositivo al servidor de Plaspy usando el endpoint y puerto compartidos.
- Defina un intervalo de reporte adecuado para que Plaspy reciba actualizaciones con la cadencia deseada.
- Opcionalmente restaure los valores de fábrica o verifique parámetros para asegurar un estado de configuración limpio.
- Valide la conectividad y confirme que el dispositivo aparece y reporta correctamente en Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte por UDP o TCP; configure UDP o TCP en el puerto 8888 si el dispositivo requiere selección de transporte
- Plaspy detecta automáticamente el protocolo del rastreador y utiliza el mismo puerto para todos los dispositivos soportados

## Requisitos habituales antes de la configuración

- Un TK319‑H con batería cargada y correctamente instalado, con acceso a su interfaz de comandos SMS o a la herramienta de configuración del fabricante
- Una tarjeta SIM activa y provisionada para datos móviles y SMS en el dispositivo cuando sea necesario
- Información correcta del APN del operador móvil para habilitar la conectividad de datos GPRS
- Acceso al instalador o administrador del dispositivo para enviar comandos SMS o usar la herramienta del proveedor
- Conocimientos básicos de la versión de firmware del dispositivo y acceso a la documentación oficial de EElink para instrucciones específicas del modelo
- Un método para monitorear el dispositivo después de la configuración y confirmar que informa a Plaspy

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el TK319‑H envía su posición y telemetría al endpoint y puerto compartidos del servidor Plaspy. Plaspy ingiere actualizaciones de posición, alarmas y mensajes de estado, y utiliza detección automática de protocolo para analizar los mensajes del dispositivo.

- El dispositivo envía ubicación y telemetría a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888
- Plaspy acepta conexiones por UDP o TCP y recibirá los reportes en el puerto compartido 8888
- Alarmas y mensajes de estado como eventos de ignición o movimiento se reenvían a Plaspy para visibilidad y alertas
- Plaspy muestra posiciones en tiempo real y almacena viajes históricos para monitoreo y reportes de flota

## Flujo de configuración típico

1. Acceda al método de configuración oficial de EElink para su tipo de dispositivo, por ejemplo comandos SMS o la herramienta de gestión EElink según lo documentado por el fabricante
2. Configure el APN del operador usando el comando APN y los campos opcionales de usuario y contraseña de APN si su operador los requiere
3. Introduzca el servidor de Plaspy como d.plaspy.com o 54.85.159.138 y establezca el puerto en 8888
4. Elija UDP o TCP si el rastreador exige selección de transporte al configurar el servidor
5. Aplique o guarde la configuración en el rastreador y espere mensajes de confirmación cuando proceda
6. Reinicie el dispositivo si el fabricante lo requiere tras cambiar ajustes del servidor
7. Valide que el TK319‑H está reportando a Plaspy revisando la actividad del dispositivo en la plataforma y confirmando actualizaciones de posición

## Comandos de configuración de ejemplo

Para configurar el rastreador envíe las siguientes órdenes por mensajes SMS en el orden listado. Estos son comandos públicos de ejemplo extraídos de la guía de configuración del dispositivo. Las etiquetas y el tiempo entre mensajes SMS pueden variar según la SIM y la región.

- Reinicio de fábrica opcional o configuración inicial
```
FACTORY#
```

- Ajustar la zona horaria a UTC 0
```
GMT,E,0#
```

- Configurar el APN del operador. Reemplace los marcadores según corresponda
```
APN,[apn]# 
```
Si su operador solicita usuario y contraseña de APN inclúyalos así
```
APN,[apn],[apnu],[apnp]#
```
Nota: [apn] es el nombre del punto de acceso del operador. [apnu] y [apnp] son los campos opcionales de usuario y contraseña del APN.

- Configurar el servidor GPRS para usar el dominio y puerto de Plaspy
```
SERVER,1,d.plaspy.com,8888#
```
o configurar el servidor usando la IP y puerto de Plaspy
```
SERVER,0,54.85.159.138,8888#
```

- Establecer intervalo de actualización para reportar cada 60 segundos
```
TIMER,60#
```

- Para verificar la configuración de parámetros actual
```
PARAM#
```

## Notas sobre la configuración

- La configuración por SMS es un método común y soportado para el TK319‑H, pero las herramientas del fabricante o el firmware del equipo pueden ofrecer métodos alternativos; consulte la documentación de EElink para opciones
- Las revisiones de firmware y las variantes de hardware pueden cambiar el formato exacto de los comandos o los parámetros disponibles; verifique la sintaxis de los comandos según el firmware de su dispositivo
- TCP y UDP son ambos transportes soportados; elija el transporte que se ajuste a su red y preferencia del instalador y configúrelo en el puerto 8888
- Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta el protocolo automáticamente, por lo que use 8888 como puerto de destino para integraciones con Plaspy
- Use el comando PARAM# después de la configuración para confirmar los parámetros y ajustes del servidor en el dispositivo

## Por qué usar Plaspy con esta configuración

Usar el TK319‑H con Plaspy brinda a las organizaciones visibilidad consistente de la ubicación de los vehículos, la telemetría y los eventos de alarma. El TK319‑H envía actualizaciones de posición y cambios de estado al endpoint compartido de Plaspy, permitiendo a los gestores de flota monitorear actividad, recibir notificaciones de eventos y actuar con rapidez ante incidentes.

Para saber más sobre Plaspy y cómo se gestionan las integraciones de dispositivos visite https://www.plaspy.com. Para los detalles más recientes específicos del dispositivo, notas de firmware y guía del fabricante, verifique la información en el sitio oficial de EElink https://www.eelink.com.cn/ ya que los métodos y el comportamiento pueden cambiar con revisiones de firmware y producto.
