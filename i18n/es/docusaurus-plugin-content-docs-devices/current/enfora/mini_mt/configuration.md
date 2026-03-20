---
slug: /enfora/mini_mt/configuration
id: mini_mt-configuration
sidebar_label: Configuration
title: Enfora - Mini MT Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Enfora Mini MT y conectarlo a Plaspy con comandos y flujo de trabajo para integración rápida
keywords:
  - Configuración Enfora Mini MT
  - Instalación Enfora Mini MT
  - Rastreador GPS Enfora Plaspy
  - Configuración servidor Mini MT
  - Configuración plataforma GPS Enfora Mini MT
  - Integración Mini MT Plaspy
  - Guía configuración rastreador Enfora
  - Configuración rastreador GPRS
  - Rastreador personal Enfora Mini MT
  - Rastreo vehicular Enfora Mini MT
---

# Enfora - Configuración del Mini MT

Esta página documenta el contexto público de configuración para usar el rastreador Enfora Mini MT con Plaspy. Reúne los ajustes de servidor prácticos, ejemplos de comandos AT y un flujo de trabajo recomendado basado en la descripción del dispositivo y fragmentos de configuración tipo fabricante. Use esta guía para preparar el Mini MT y apuntarlo a Plaspy, manteniendo los detalles a nivel de dispositivo alineados con la documentación del fabricante.

Plaspy utiliza ajustes de servidor compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando se conecta. Los pasos de configuración del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; siga las instrucciones específicas de su equipo Enfora en paralelo con los pasos y comandos mostrados aquí.

## Resumen de la configuración

El objetivo es apuntar el Mini MT al endpoint compartido de Plaspy, seleccionar el transporte correcto, habilitar los eventos de reporte y verificar que el dispositivo aparezca en Plaspy. Cuando esté disponible, el dispositivo acepta comandos estilo AT para establecer APN, servidores, puerto y reglas de reportes por eventos.

- Configure el APN y los parámetros de registro de red para que el Mini MT tenga conectividad GPRS.  
- Configure el dispositivo para reportar a Plaspy usando el servidor compartido y el puerto correspondiente.  
- Active o ajuste los reportes periódicos y por eventos para que las ubicaciones y alertas lleguen a Plaspy.  
- Guarde y aplique los ajustes y reinicie el rastreador para activar la nueva configuración.  
- Valide la conectividad y la visibilidad en Plaspy para confirmar que el protocolo del rastreador fue detectado automáticamente.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles)  
- Soporte de transporte UDP o TCP (el dispositivo puede configurarse con UDP o TCP en el puerto 8888)  
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos habituales antes de la configuración

- Un Enfora Mini MT alimentado y con acceso al método o utilidad de configuración del fabricante  
- Una tarjeta SIM válida y servicio de datos GPRS activo adecuado para el dispositivo (el equipo usa comunicaciones GSM GPRS)  
- Acceso para enviar comandos AT o usar la herramienta oficial de configuración Enfora según requiera su dispositivo  
- La información del APN de su operadora móvil (mantenga marcadores como [apn] si los necesita)  
- Comprensión básica del modelo de reportes por eventos del dispositivo para poder habilitar o ajustar los eventos necesarios  
- Un método para reiniciar o restablecer el dispositivo después de la configuración, si fuera necesario

## Cómo se conecta este rastreador a Plaspy

El Mini MT se configura para reportar ubicación y eventos de dispositivo al endpoint compartido de Plaspy y al puerto indicado. Una vez que el rastreador tenga conectividad de datos móviles y se hayan aplicado el servidor y el puerto, Plaspy detectará el protocolo del dispositivo y comenzará a procesar los mensajes.

- El rastreador apunta a d.plaspy.com o directamente a la IP 54.85.159.138 como servidor de destino  
- El dispositivo envía mensajes al puerto 8888; Plaspy acepta TCP o UDP en ese puerto  
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesario preseleccionar un protocolo en la plataforma  
- Las reglas de eventos en el dispositivo (reportes por tiempo, entradas, batería, antena GPS, ignición, etc.) controlan lo que se envía a Plaspy  
- Tras una configuración exitosa, el dispositivo será visible en Plaspy para monitoreo y análisis de eventos

## Flujo de trabajo común de configuración

1. Acceda al método o software oficial de configuración Enfora para el Mini MT (herramienta del fabricante, consola serial o utilidad proporcionada por el proveedor).  
2. Ingrese d.plaspy.com o la IP directa 54.85.159.138 como servidor principal de reporte.  
3. Establezca el puerto del servidor en 8888 (todos los dispositivos en Plaspy usan el mismo puerto).  
4. Elija UDP o TCP si el rastreador requiere selección explícita del transporte.  
5. Configure el APN y cualquier autenticación de red necesaria usando marcadores como [apn], [apnu] y [apnp] donde corresponda.  
6. Aplique o guarde la configuración y use el comando del dispositivo para persistir los ajustes (por ejemplo AT&W).  
7. Reinicie o restablezca el dispositivo si es necesario para activar los nuevos parámetros y verifique que el dispositivo reporte a Plaspy.  
8. Valide la conectividad y los reportes de eventos dentro de Plaspy para confirmar que el dispositivo está visible y enviando información.

## Ejemplos de comandos de configuración

La siguiente secuencia de comandos AT es un ejemplo de estilo público que configura el APN, fija el servidor Plaspy, habilita reportes UDP en el puerto 8888, activa varios reportes por evento, guarda la configuración y luego reinicia el dispositivo. Mantenga los marcadores y cámbielos por sus valores reales antes de enviarlos.

- Ejemplo de reseteo a fábrica inicial y guardado de ajustes
```text
AT&F
AT&W
```

- Configurar APN (reemplace [apn] por el APN de su operador)
```text
AT+CGDCONT=1,"IP","[apn]"
```

- Autenticación GPRS opcional (solo si su SIM/APN requiere usuario o contraseña)
```text
AT%CGPCO=1,"[apnu],[apnp]",0
```
Note: [apnu] is the APN username placeholder and [apnp] is the APN password placeholder.

- Apuntar el rastreador a Plaspy por IP y establecer puerto UDP 8888
```text
AT$FRIEND=1,1,"54.85.159.138"
AT$UDPAPI=,8888
AT$WAKEUP=1,1
```

- Ejemplos de configuración de reportes por tiempo y eventos
```text
' Time report every 60 seconds
AT$EVTIM4=60
AT$EVENT=9,1,12,1,1
AT$EVENT=9,3,40,2,28905678
AT$EVENT=9,3,60,2,28905678
```

- Reporte por entrada 1
```text
AT$EVENT=10,0,0,1,1
AT$EVENT=10,3,40,1,28905678
AT$EVENT=10,3,60,1,28905678
```

- Reporte por entrada 2
```text
AT$EVENT=12,0,1,1,1
AT$EVENT=12,3,40,4,28905678
AT$EVENT=12,3,60,4,28905678
```

- Reporte de desconexión y conexión de batería
```text
AT$EVENT=14,0,3,0,0
AT$EVENT=14,3,40,6,28905678
AT$EVENT=14,3,60,6,28905678

AT$EVENT=17,0,3,1,1
AT$EVENT=17,3,40,17,28905678
AT$EVENT=17,3,60,22,28905678
```

- Reporte de desconexión y conexión de antena GPS
```text
AT$EVENT=15,0,71,2,3
AT$EVENT=15,3,40,7,28905678

AT$EVENT=16,0,71,1,1
AT$EVENT=16,3,40,16,28905678
```

- Reporte de ignición encendida y apagada
```text
AT$EVENT=37,0,7,1,1
AT$EVENT=37,3,40,2,28905678

AT$EVENT=38,0,7,0,0
AT$EVENT=38,3,40,3,28905678
```

- Registro de canal y guardado final más reinicio opcional
```text
AT$AREG=2
AT&W
```

- Opcional: realizar un reinicio para aplicar los ajustes de inmediato
```text
AT$RESET
```
Label: Optional device reset to restart and apply configuration when needed.

## Notas sobre la configuración

- Las variaciones de firmware y las revisiones de hardware pueden cambiar los comandos AT disponibles o el formato de parámetros; confirme siempre con las notas del firmware de su dispositivo.  
- Elija UDP o TCP según sus preferencias de instalación; ambos son compatibles con Plaspy en el puerto 8888 y Plaspy detectará automáticamente el protocolo en uso.  
- Conserve marcadores como [apn], [apnu] y [apnp] y sustitúyalos por las credenciales de su operador cuando sean necesarias.  
- Use la herramienta oficial de configuración del fabricante o las interfaces soportadas para enviar comandos AT; comandos mal formateados pueden afectar el comportamiento del dispositivo.  
- Guarde la configuración (por ejemplo con AT&W o el equivalente) antes de reiniciar el equipo para asegurar que los cambios persistan tras ciclos de energía.

## Por qué usar Plaspy con esta configuración

Configurar el Enfora Mini MT para reportar a Plaspy ofrece a las organizaciones una vía sencilla para obtener visibilidad consistente de dispositivos y reportes de eventos. Usar el endpoint y puerto compartidos de Plaspy simplifica el despliegue en flotas mixtas porque Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del dispositivo al conectarse.

To learn more about Plaspy and platform features visit https://www.plaspy.com. For the most current and device specific instructions, firmware notes, and official support resources verify the details on the manufacturer site http://www.enfora.com/ as device behavior and configuration steps can change with firmware and hardware revisions.
