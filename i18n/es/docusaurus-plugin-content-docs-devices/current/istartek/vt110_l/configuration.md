---
slug: /istartek/vt110_l/configuration
id: vt110_l-configuration
sidebar_label: Configuration
title: iStartek - VT110-L Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador iStartek VT110-L y ajustes del servidor Plaspy para integración
keywords:
  - configuración iStartek VT110-L
  - configuración VT110-L
  - configuración servidor VT110-L
  - configuración Plaspy VT110-L
  - configuración rastreador Plaspy
  - guía configuración rastreador GPS
  - configuración seguimiento vehicular
  - integración rastreador GNSS
  - configuración seguimiento flotilla
  - comandos configuración SMS
---

# iStartek - VT110-L Configuración

Esta página describe el contexto público de configuración para usar el rastreador iStartek VT110-L con Plaspy. Explica los ajustes prácticos del servidor y los comandos y pasos más comunes del fabricante que puede usar para apuntar el dispositivo a Plaspy para seguimiento en tiempo real y reporte de eventos.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El VT110-L admite configuración por SMS y configuración por datos celulares; los ejemplos a continuación reflejan los comandos públicos y los valores del servidor Plaspy que deberá aplicar.

## Resumen de la configuración

El objetivo al configurar el VT110-L para Plaspy es preparar el dispositivo para comunicarse de forma confiable con el servidor de Plaspy, validar la conectividad por la red móvil y permitir que el equipo aparezca y reporte eventos dentro de la plataforma Plaspy.

- Configurar el rastreador para que envíe datos al endpoint del servidor Plaspy y que la ubicación y los eventos se reciban en tiempo real.
- Establecer el APN celular y verificar la conectividad de datos para que el dispositivo pueda usar LTE/GPRS para telemetría.
- Elegir la capa de transporte (UDP o TCP) y el puerto común de Plaspy para que el dispositivo transmita al endpoint correcto.
- Validar el intervalo de actualización y las alarmas para que el dispositivo reporte con la frecuencia deseada y entregue notificaciones de eventos.
- Usar comandos SMS del fabricante o herramientas de configuración para aplicar ajustes y verificar parámetros.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP
- Detección automática de protocolo en Plaspy para que la plataforma acepte el protocolo del rastreador una vez que el dispositivo se conecte

## Requisitos típicos antes de la configuración

- Una conexión de alimentación vehicular válida y el VT110-L instalado o accesible para la configuración.
- Una nano SIM con plan de datos activo y el APN correcto para el operador móvil.
- Capacidad para enviar comandos SMS al dispositivo o acceso a la herramienta de configuración del fabricante suministrada por iStartek o el instalador.
- Información básica del despliegue, como el intervalo de actualización deseado y si se prefiere UDP o TCP.
- Acceso a credenciales de cuenta Plaspy y al flujo de registro de dispositivos en la plataforma para verificar el equipo después de la configuración.
- Documentación del fabricante o notas de firmware de iStartek para confirmar la sintaxis de los comandos y el comportamiento para la revisión de su dispositivo.

## Cómo se conecta este rastreador a Plaspy

El VT110-L se configura para reportar posición, estado y datos de eventos al endpoint y puerto compartidos de Plaspy, de modo que la telemetría del vehículo aparezca en la plataforma Plaspy para monitoreo e informes.

- El rastreador envía fijaciones GNSS y datos de ubicación por respaldo celular a través de la red móvil hacia d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede configurarse como UDP o TCP según la preferencia del instalador; Plaspy soporta ambos y detecta automáticamente el protocolo en uso.
- El dispositivo reporta actualizaciones periódicas de ubicación según el intervalo TIMER configurado y envía mensajes de evento para alarmas y cambios de E/S.
- Plaspy ingiere la telemetría para seguimiento en vivo, historial y alertas basadas en reglas, lo que permite a los equipos operativos actuar ante eventos como encendido, apertura de puertas o alarmas por impacto.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración iStartek para el VT110-L, por ejemplo el conjunto de comandos SMS o la herramienta de configuración del proveedor, usando el manual del dispositivo de iStartek.
2. Ingrese el nombre de host del servidor Plaspy o la IP del servidor — d.plaspy.com o 54.85.159.138 — en el parámetro SERVER.
3. Configure el puerto del servidor en 8888, que es el que Plaspy utiliza para todos los dispositivos compatibles.
4. Elija el tipo de transporte (UDP o TCP) si el dispositivo requiere selección de transporte durante la configuración.
5. Establezca el APN de su operador celular usando el comando APN y configure los marcadores de usuario y contraseña del APN si la SIM los requiere.
6. Aplique o guarde la configuración y reinicie el dispositivo si el rastreador requiere reboot para que los cambios surtan efecto.
7. Valide que el dispositivo reporte a Plaspy verificando la conectividad del equipo y usando el comando de verificación PARAM o confirmando que la unidad aparece en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El VT110-L soporta configuración por SMS. Los siguientes comandos públicos aparecen en la documentación del dispositivo. Preserve los marcadores como [apn], [apnu] y [apnp] y reemplácelos por los valores del APN de su operador donde corresponda.

1. Reinicio opcional a configuración de fábrica (usar solo si se requiere un reset para la configuración inicial):
```
FACTORY#
```

2. Establecer la zona horaria a UTC 0 (ejemplo):
```
GMT,E,0#
```

3. Establecer el APN del operador. Reemplace [apn] por el APN de su operador. Si su operador requiere usuario o contraseña, pueden incluirse los marcadores opcionales [apnu] y [apnp].
```
APN,[apn]#
```
O, si se requieren usuario y contraseña:
```
APN,[apn],[apnu],[apnp]#
```

4. Configurar el servidor GPRS al dominio Plaspy y puerto usando SERVER con dominio (el ejemplo usa índice de servidor 1):
```
SERVER,1,d.plaspy.com,8888#
```

5. Alternativamente configurar el servidor GPRS usando la IP del servidor Plaspy y puerto (el ejemplo usa índice de servidor 0):
```
SERVER,0,54.85.159.138,8888#
```

6. Establecer el intervalo de actualización de ubicación a 60 segundos:
```
TIMER,60#
```

7. Verificar los parámetros actuales (comando de verificación):
```
PARAM#
```

Notas sobre marcadores: [apn] es el nombre del punto de acceso del operador para datos. [apnu] y [apnp] son los campos opcionales de usuario y contraseña del APN cuando los exige el operador móvil.

## Notas de configuración

- El firmware y la sintaxis de comandos pueden variar según la revisión de hardware y la versión de firmware; confirme siempre el comportamiento de los comandos para su unidad VT110-L con la documentación de iStartek.
- El VT110-L admite la configuración por SMS en el conjunto de comandos públicos mostrados arriba; algunos instaladores prefieren usar herramientas del proveedor o aprovisionamiento OTA si está disponible.
- Al elegir el transporte, UDP suele tener menor sobrecarga mientras que TCP ofrece confirmación de conexión; Plaspy soporta ambos y detecta automáticamente el protocolo usado por el dispositivo.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos compatibles, lo que simplifica la configuración del servidor en múltiples modelos de rastreadores.
- Use el comando de verificación PARAM# después de la configuración para confirmar los ajustes aplicados antes de finalizar el despliegue.

## Por qué usar Plaspy con esta configuración

Usar el VT110-L con Plaspy proporciona a operadores de flota y propietarios de vehículos visibilidad confiable de la ubicación y los datos de eventos. Configurar el dispositivo para que reporte al endpoint y puerto compartidos de Plaspy permite seguimiento en vivo, reproducción histórica y manejo de alarmas para flujos operativos como despacho, control de inmovilizador y respuesta ante incidentes.

Para obtener más información sobre Plaspy y las integraciones de dispositivos compatibles visite https://www.plaspy.com. Para la sintaxis de comandos específica más reciente, notas de firmware y orientación de instalación confirme siempre los detalles con el fabricante en https://istartek.com/ ya que los métodos de configuración y el comportamiento del dispositivo pueden cambiar con el tiempo.
