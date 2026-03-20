---
slug: /istartek/vt600/configuration
id: vt600-configuration
sidebar_label: Configuration
title: iStartek - VT600 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el iStartek VT600 para reportar a Plaspy con ajustes públicos de servidor y comandos SMS de ejemplo
keywords:
  - configuración iStartek VT600
  - configuración VT600
  - configuración VT600 Plaspy
  - configuración rastreador GPS VT600
  - configuración rastreador iStartek
  - configuración servidor Plaspy
  - configuración servidor rastreador GPS
  - configuración seguimiento de vehículos
  - configuración seguimiento de flotas
  - configuración SMS VT600
---

# iStartek - Configuración del VT600

Esta página documenta el contexto público de configuración para usar el rastreador GPS iStartek VT600 con la plataforma Plaspy. Describe los ajustes públicos del servidor Plaspy a los que debe apuntar el dispositivo, explica los pasos comunes de puesta en marcha y proporciona ejemplos de comandos SMS que aparecen en la documentación pública de configuración del equipo. Utilice estas indicaciones para preparar el VT600 para reportar a Plaspy; siempre verifique el comportamiento específico del dispositivo con el fabricante por diferencias de firmware o revisión.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos de configuración por parte del fabricante para el VT600 pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y las herramientas del proveedor. El VT600 soporta enlace SMS y GSM/GPRS para envío de datos, y los comandos SMS de ejemplo que se muestran a continuación son el método públicamente documentado para configurar el dispositivo en muchas implementaciones.

## Visión general de la configuración

El proceso de configuración prepara el VT600 para enviar datos de ubicación y eventos a Plaspy, valida la conectividad y asegura que el dispositivo aparezca en la plataforma Plaspy. Los pasos a continuación se centran en establecer un reporte GPRS confiable y verificar que el dispositivo pueda ser monitoreado en Plaspy.

- Apunte el VT600 al endpoint del servidor Plaspy para que Plaspy pueda recibir la telemetría de GPS y eventos.
- Configure el APN y ajustes GPRS para que el rastreador tenga acceso a datos móviles y pueda enviar puntos.
- Establezca el intervalo de reporte o temporizadores para coincidir con la frecuencia de rastreo requerida.
- Valide la conectividad y verifique que el dispositivo reporte el historial almacenado en la memoria interna después de cortes de red.
- Confirme que las alarmas y comportamientos de entradas/salidas se reflejen en Plaspy una vez que el dispositivo esté conectado.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos del servidor Plaspy al configurar el VT600:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when the device connects

Todos los dispositivos Plaspy usan el mismo puerto y la plataforma se encarga de la detección del protocolo, por lo que el rastreador puede configurarse para reportar al endpoint compartido indicado arriba.

## Requisitos previos típicos

- Un dispositivo VT600 con alimentación y funcional, con una tarjeta SIM activa instalada
- Acceso a datos móviles para la SIM y los detalles correctos del APN proporcionados por el operador
- Acceso al dispositivo para su configuración usando el método soportado por el fabricante (comandos SMS o herramientas del proveedor)
- El número telefónico de la SIM del dispositivo o la vía de control remoto por SMS para enviar los SMS de configuración
- Una cuenta de Plaspy o acceso a una instancia de Plaspy donde el dispositivo será registrado y monitoreado

## Cómo se conecta este rastreador a Plaspy

El VT600 envía datos periódicos y por eventos de GPS y estado a Plaspy a través de la red celular. Plaspy recibe los puntos de ubicación y la telemetría de eventos y los presenta como ubicaciones en vivo, eventos en la línea de tiempo y alertas para los operadores de flotas.

- El rastreador se configura para reportar al endpoint y puerto compartido de Plaspy (d.plaspy.com o 54.85.159.138 en el puerto 8888).
- El dispositivo utiliza GSM/GPRS para subir datos de ubicación y eventos; el SMS puede emplearse para configuración y como método de respaldo en algunos flujos.
- La memoria flash interna bufferiza las coordenadas durante cortes temporales de la red para que Plaspy reciba el historial completo de la ruta tras la reconexión.
- Las notificaciones de eventos y alarmas como inmovilización, corte de energía, SOS y otras entradas se envían a Plaspy para monitorización en tiempo real.
- Plaspy muestra la telemetría y los flujos de ubicación permitiendo visibilidad operativa y reproducción histórica una vez confirmado el reporte.

## Flujo típico de configuración

1. Acceda al método oficial de configuración iStartek para el VT600 (comandos SMS o la herramienta de configuración del proveedor) según lo documentado por iStartek.
2. Ingrese la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP del servidor 54.85.159.138.
3. Establezca el puerto del servidor en 8888 en la configuración del dispositivo.
4. Elija el transporte UDP o TCP si el dispositivo requiere selección de transporte.
5. Configure el APN y otros parámetros GPRS requeridos por el operador móvil.
6. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones del fabricante lo requieren.
7. Valide que el VT600 reporte a Plaspy y que la ubicación, el historial bufferizado y los eventos aparezcan en la plataforma.

## Comandos de configuración de ejemplo

El VT600 puede configurarse enviando mensajes SMS al dispositivo. Los siguientes comandos públicos aparecen en la documentación del fabricante y se presentan aquí en orden. Mantenga los marcadores de posición tal como se muestran y reemplácelos con los valores de su operador donde sea necesario.

- Optional initial factory reset (use only if you intend to reset the device to factory defaults):
```
FACTORY#
```

- Set the time zone to UTC offset 0 (example):
```
GMT,E,0#
```

- Set the operator APN. Replace the placeholder values as needed:
```
APN,[apn][,[apnu],[apnp]]#
```
Explicación: [apn] es la cadena APN del operador. Si su proveedor requiere usuario o contraseña, incluya [apnu] y [apnp] donde corresponda. Mantenga los marcadores de posición visibles y reemplácelos por valores reales.

- Set the GPRS server using the Plaspy domain and port:
```
SERVER,1,d.plaspy.com,8888#
```

- Or set the GPRS server using the Plaspy server IP and port:
```
SERVER,0,54.85.159.138,8888#
```
Nota: El fabricante muestra variantes con dominio y con IP. Use la que funcione mejor en su entorno; Plaspy acepta conexiones al puerto compartido y detecta el protocolo automáticamente.

- Set the update interval to every 60 seconds:
```
TIMER,60#
```

- Verify or request current parameters from the device:
```
PARAM#
```
Explicación: PARAM# solicita al dispositivo que devuelva su configuración actual para que usted pueda verificar APN, servidor, temporizador y otros valores activos.

## Notas de configuración

- Los comandos SMS anteriores son ejemplos públicos; algunas versiones de firmware, modelos regionales o flujos con herramientas del proveedor pueden requerir una sintaxis diferente o campos adicionales.
- El VT600 soporta configuración por SMS como se muestra, pero muchos instaladores prefieren el software del proveedor o herramientas de configuración cuando están disponibles.
- Elija UDP o TCP según las necesidades de su despliegue; Plaspy soporta ambos y detecta el protocolo automáticamente una vez que el dispositivo se conecta.
- Conserve los marcadores de posición [apn], [apnu] y [apnp] al preparar los comandos y reemplácelos por los valores específicos del operador.
- Use PARAM# después de aplicar los ajustes para confirmar que el servidor, puerto y temporizador se establecieron correctamente antes de validar en Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el VT600 con Plaspy ofrece a los operadores de flota una ruta práctica hacia una visibilidad vehicular fiable, monitorización de eventos y reproducción histórica. La capacidad del VT600 para almacenar coordenadas en flash y reportar telemetría periódica y por eventos complementa las capacidades de ingestión y visualización de Plaspy, lo que lo convierte en una opción adecuada para flujos anti-robo, monitoreo de rutas e integración de sensores.

Para obtener más información sobre Plaspy y cómo se integra con dispositivos como el iStartek VT600 visite https://www.plaspy.com. Para comandos específicos más recientes, comportamiento de firmware y detalles del fabricante, verifique la documentación más reciente del VT600 en https://istartek.com/ .
