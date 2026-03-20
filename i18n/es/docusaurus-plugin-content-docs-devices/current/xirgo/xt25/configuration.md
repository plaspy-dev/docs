---
slug: /xirgo/xt25/configuration
id: xt25-configuration
sidebar_label: Configuration
title: Xirgo - XT25 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del tracker Xirgo XT25 con ajustes GPRS y comandos SMS para integrarlo con Plaspy
keywords:
  - configuración Xirgo XT25
  - configuración XT25
  - XT25 configuración Plaspy
  - configuración rastreador GPS XT25
  - guía configuración Xirgo
  - ajustes rastreador Plaspy
  - configuración rastreador de vehículo
  - comandos SMS rastreador GPS
  - seguimiento de flotas XT25
  - configuración servidor XT25
---

# Xirgo - Configuración del XT25

Esta página reúne el contexto público de configuración para usar el Xirgo XT25 con Plaspy. Contiene los ajustes de servidor prácticos y ejemplos de comandos SMS disponibles públicamente, y explica cómo aplicarlos para que la unidad reporte a Plaspy y permita el rastreo y la telemetría en tiempo real. Use esta guía junto con la documentación del fabricante y sus procedimientos de instalación.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos concretos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El XT25 admite configuración por SMS y GPRS en muchas implementaciones; los comandos de ejemplo a continuación reflejan los comandos SMS publicados que integradores usan comúnmente.

## Resumen de la configuración

El objetivo es preparar el XT25 para comunicarse de forma fiable con Plaspy, validar la conectividad en el vehículo y habilitar la visibilidad en la plataforma. Los ejemplos muestran cómo configurar el APN y el servidor GPRS de Plaspy para que el equipo envíe datos al punto de enlace compartido de Plaspy.

- Configure el APN del operador móvil para que el dispositivo obtenga conectividad de datos GPRS.  
- Apunte el rastreador al endpoint y puerto del servidor compartido de Plaspy para que la plataforma reciba telemetría.  
- Seleccione el protocolo de transporte (UDP o TCP) si el dispositivo lo requiere y guarde la configuración.  
- Valide el equipo en el vehículo y confirme que la unidad aparece en Plaspy para rastreo y reporte en vivo.  
- Emplee configuración por SMS o la herramienta del fabricante según las prácticas del sitio y la versión de firmware.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: device may be configured using UDP or TCP on port 8888  
- Plaspy automáticamente detecta el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos típicos antes de la configuración

- Un XT25 alimentado e instalado o conectado para la configuración y pruebas iniciales.  
- Una SIM celular activa con datos habilitados y los datos del APN del operador para que el dispositivo pueda conectarse a la red móvil.  
- Acceso a un teléfono con capacidad SMS o a la herramienta de configuración del fabricante si se requiere configuración por SMS.  
- El equipo debe ser accesible (verifique alimentación y antena) y no estar en un estado bloqueado o con restricciones de firmware.  
- Documentación del fabricante o instrucciones de instalación de Xirgo para confirmar formatos de comando y comportamiento del firmware.

## Cómo se conecta este rastreador a Plaspy

El XT25 se configura para enviar posiciones y telemetría al endpoint y puerto compartidos de Plaspy, de modo que la plataforma pueda ingerir eventos, mostrar ubicaciones en tiempo real en el mapa y generar alertas e informes. Una vez que el XT25 apunte al servidor de Plaspy y tenga conectividad de datos, Plaspy detecta el protocolo entrante y asocia el dispositivo con su cuenta o flota.

- El rastreador envía fijaciones GNSS y eventos de movimiento/accelerómetro al endpoint de Plaspy.  
- Telemetría como estado de ignición derivado de OBD y señales diagnósticas puede reenviarse a Plaspy cuando esté disponible.  
- El equipo debe usar el endpoint de Plaspy (d.plaspy.com o 54.85.159.138) en el puerto 8888 para subir datos.  
- El transporte puede ser UDP o TCP según la selección del dispositivo; Plaspy acepta ambos y detecta el protocolo.  
- Una vez que reporte, la unidad será visible en Plaspy para rastreo en vivo, alertas de geocerca y reproducción histórica.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de Xirgo o al software recomendado por el fabricante (comandos SMS, herramienta web o utilidad de configuración).  
2. Introduzca el servidor de Plaspy como dominio d.plaspy.com o la IP 54.85.159.138 en los ajustes GPRS/servidor del dispositivo.  
3. Configure el puerto del dispositivo a 8888 (Plaspy usa el mismo puerto para todos los dispositivos soportados).  
4. Seleccione UDP o TCP si el dispositivo requiere elegir el transporte.  
5. Configure el APN del operador y las credenciales del APN que la SIM requiera para disponer de datos GPRS.  
6. Aplique o guarde la configuración y, si es necesario, reinicie el dispositivo para activar los nuevos ajustes.  
7. Valide que el equipo reporte a Plaspy y aparezca en la plataforma con actualizaciones de ubicación y telemetría en tiempo real.

## Comandos de configuración de ejemplo

El XT25 admite configuración mediante SMS. Los siguientes comandos públicos se usan para establecer el APN y el servidor GPRS para Plaspy. Envíe cada comando como SMS desde un número autorizado si su dispositivo permite configuración por SMS.

- Configure el APN del operador y credenciales opcionales (reemplace los marcadores con los valores de su operador):
```text
+XT:1002,{{apnu}},{{apnp}},{{apn}}
```
Explicación de los marcadores:
- {{apn}} = nombre del APN proporcionado por su operador celular.  
- {{apnu}} = usuario del APN si es requerido (dejar en blanco o usar un marcador si no se requiere).  
- {{apnp}} = contraseña del APN si es requerida (dejar en blanco o usar un marcador si no se requiere).

- Configure el servidor GPRS apuntando a Plaspy (el puerto y la IP del servidor se muestran y deben coincidir con los ajustes de Plaspy):
```text
+XT:1001,8888,54.85.159.138,4,0,0
```
Este comando indica al rastreador que use el puerto 8888 y la IP del servidor 54.85.159.138. Los parámetros numéricos tras la IP reflejan el formato del comando publicado; consulte la documentación de Xirgo para la definición completa de parámetros.

## Notas sobre la configuración

- La configuración por SMS está soportada por los comandos públicos del XT25 arriba; algunas instalaciones prefieren una herramienta cableada o la utilidad del fabricante. Use el método acorde con su firmware y procedimientos de instalación.  
- Las versiones de firmware y revisiones de hardware pueden cambiar la sintaxis o las opciones disponibles; verifique el formato de comando correcto para su versión de firmware.  
- Seleccione UDP o TCP según sus requisitos de integración y red; Plaspy acepta ambos y detecta el protocolo automáticamente.  
- Todos los dispositivos en Plaspy usan el mismo puerto (8888) para conexiones entrantes, lo que simplifica el despliegue en flotas con dispositivos mixtos.  
- Siempre contraste los comandos públicos y sus parámetros con la documentación oficial de Xirgo para confirmar el comportamiento exacto de su unidad.

## Por qué usar Plaspy con esta configuración

Configurar el Xirgo XT25 para reportar a Plaspy permite a los operadores de flota centralizar ubicaciones de vehículos, telemetría e informes de eventos en una sola plataforma. Con los sensores a bordo del XT25, datos OBD cuando estén disponibles y opciones de expansión por Bluetooth o E/S, Plaspy puede mostrar eventos dependientes de ignición, alertas de movimiento, notificaciones de geocercas y reproducción de rutas históricas para supervisión operativa e investigación de incidentes.

Learn more about Plaspy on the main website https://www.plaspy.com and consult Xirgo for the latest XT25 device documentation at https://xirgo.com/ to verify device specific configuration methods, firmware behavior, and manufacturer-provided command details.
