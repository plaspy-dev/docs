---
slug: /concox/vl802/configuration
id: vl802-configuration
sidebar_label: Configuration
title: Concox - VL802 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Concox VL802 en Plaspy con ajustes de servidor compartido y comandos SMS
keywords:
  - configuración Concox VL802
  - instalación Concox VL802
  - VL802 Plaspy
  - configuración rastreador Concox
  - instalación rastreador VL802 GPS
  - rastreo de flotas VL802
  - configuración servidor VL802
  - comandos SMS Concox VL802
  - configuración GPRS VL802
  - telemetría VL802
---

# Concox - VL802 Configuration

Esta página documenta el contexto público de configuración para usar el Concox VL802 con Plaspy. Se centra en los ajustes prácticos de servidor y los comandos comunes que se usan para apuntar el dispositivo a Plaspy, de modo que el rastreador pueda reportar ubicación y telemetría a la plataforma Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los rastreadores soportados y detecta automáticamente el protocolo del dispositivo. Los pasos de configuración por parte del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor; por eso esta guía se enfoca en los ajustes públicos y en los comandos SMS habitualmente usados con el VL802, recomendando siempre verificar con la documentación oficial de Concox.

## Visión general de la configuración

El proceso de configuración prepara el VL802 para comunicarse de forma confiable con el backend telemático de Plaspy. Los comandos y parámetros públicos suelen establecer la zona horaria del dispositivo, el APN, el endpoint del servidor GPRS, el intervalo de reporte y el modo GPRS para que el rastreador entregue datos en tiempo real a Plaspy.

- Configure el dispositivo para usar Plaspy como endpoint GPRS/TCP o UDP para asegurar que los datos lleguen a la plataforma.
- Establezca un APN correcto y active GPRS para que el rastreador pueda usar la conexión de datos celulares.
- Defina intervalos de reporte (por ejemplo, cada 60 segundos) y active el modo GPRS para controlar la cadencia de datos.
- Valide la configuración con un comando de verificación y confirme que el dispositivo sea visible en Plaspy.
- Cuando esté disponible, use SMS o las herramientas locales del fabricante (por ejemplo Bluetooth) para aplicar ajustes en campo.

## Ajustes de servidor de Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte: UDP o TCP soportados en el lado del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador y la plataforma usa el mismo puerto para todos los dispositivos soportados

## Requisitos típicos antes de la configuración

- Una unidad VL802 alimentada e instalada con acceso a su interfaz de configuración (SMS, Bluetooth o herramienta del fabricante).
- Una SIM celular activa provisionada para datos con el APN correcto del operador.
- Capacidad para enviar y recibir comandos SMS desde el sitio de instalación si va a usar configuración por SMS.
- Conocimiento de los valores APN del dispositivo y cualquier usuario o contraseña APN que requiera el operador.
- Acceso a la documentación del dispositivo o a la interfaz del instalador para aplicar ajustes y reiniciar el equipo si es necesario.
- Una cuenta o canal de soporte con Plaspy para confirmar la visibilidad del dispositivo después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El VL802 se configura para reportar posición y telemetría a Plaspy enviando datos GPRS al endpoint compartido y al puerto de Plaspy. Una vez que el dispositivo apunte a Plaspy usando los ajustes de servidor que se indican más abajo, Plaspy ingiere la telemetría entrante y muestra el estado del vehículo en la plataforma.

- El rastreador envía ubicación y telemetría a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- El dispositivo puede configurarse para usar transporte UDP o TCP según la preferencia del instalador; Plaspy acepta y detecta el protocolo automáticamente.
- Actualizaciones regulares de posición y notificaciones de eventos se envían a Plaspy según el intervalo de reporte configurado, de modo que los gestores de flota vean datos en tiempo real.
- Eventos a nivel de dispositivo como estado de ignición, SOS y telemetría analógica se reenvían a Plaspy para alertas y reportes.
- Después de la configuración, Plaspy ofrece visibilidad y monitorización de la unidad sin cambios de puerto por dispositivo, ya que Plaspy usa el mismo puerto para todos los dispositivos soportados.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración de Concox para el VL802 (comandos SMS, herramienta Bluetooth o software soportado por Concox).
2. Ingrese el endpoint del servidor Plaspy usando d.plaspy.com o 54.85.159.138 según la preferencia del instalador.
3. Configure el puerto de reporte en 8888, requerido por Plaspy.
4. Seleccione UDP o TCP en el dispositivo si el firmware requiere la selección explícita del transporte.
5. Configure el APN y las credenciales APN que requiera el operador móvil usando el método del fabricante.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware lo solicita.
7. Valide que el dispositivo reporte a Plaspy y que la telemetría aparezca en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El VL802 acepta comandos SMS para configuración. A continuación se muestran los comandos SMS públicos más usados en el orden típico. Mantenga los marcadores de posición como {{apn}}, {{apnu}} y {{apnp}} y reemplácelos por los valores del operador al enviar los SMS.

1. Restablecimiento opcional a ajustes de fábrica (usar solo cuando necesite borrar la configuración existente):
```text
FACTORY#
```

2. Establezca la zona horaria del dispositivo a UTC+0 (modifique según su zona local):
```text
GMT,E,0#
```

3. Configure el APN del operador. Reemplace {{apn}} con el APN de su red e incluya opcionalmente {{apnu}} y {{apnp}} si el operador requiere usuario y contraseña:
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```
Si solo se requiere el APN, use:
```text
APN,{{apn}}#
```
(Explicación de marcadores: {{apn}} es la cadena APN del operador móvil; {{apnu}} es el usuario APN cuando se requiere; {{apnp}} es la contraseña APN cuando se requiere.)

4. Configure el servidor GPRS para Plaspy. Puede apuntar al dominio o a la IP. Estos comandos configuran el servidor 1 para usar el dominio Plaspy o establecen el servidor a la IP de Plaspy. Ambos usan el puerto 8888.
```text
SERVER,1,d.plaspy.com,8888,0#
```
o
```text
SERVER,0,54.85.159.138,8888,0#
```

5. Defina el intervalo de actualización/reporte a cada 60 segundos. El dispositivo acepta formatos de temporizador simple o doble:
```text
TIMER,60#
```
o
```text
TIMER,60,60#
```

6. Active el modo GPRS para permitir el reporte por datos:
```text
GPRSON,1#
```

7. Verifique los ajustes actuales de GPRS y servidor:
```text
GPRSSET#
```

Siga el orden anterior al inicializar un dispositivo para Plaspy para asegurar que el APN y el servidor se establezcan antes de habilitar el modo GPRS. Si usó FACTORY# para resetear el dispositivo, vuelva a aplicar los ajustes de APN y servidor antes de activar GPRS.

## Notas de configuración

- La configuración por SMS es comúnmente soportada en el VL802; de forma alternativa use las herramientas locales de Concox como Bluetooth cuando estén disponibles.
- Las revisiones de firmware pueden cambiar la sintaxis exacta de los comandos o los parámetros soportados; siempre verifique los comandos contra las notas del firmware cuando sea posible.
- Elija UDP o TCP según las necesidades de la instalación; Plaspy acepta ambos y detectará automáticamente el protocolo en el puerto 8888.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados, lo que simplifica despliegues con múltiples unidades.
- Si usa la configuración de servidor basada en dominio (d.plaspy.com), asegúrese de que el dispositivo tenga resolución DNS funcionando a través del APN del operador.

## Por qué usar Plaspy con esta configuración

Configurar el Concox VL802 para reportar a Plaspy ofrece una forma confiable de centralizar la ubicación de vehículos, eventos y telemetría de sensores en una sola plataforma. Para operadores de flota, esta configuración posibilita monitorización continua, flujos anti‑robo usando la salida de relé y alertas basadas en telemetría para seguridad del conductor y eficiencia operativa.

Para saber más sobre Plaspy y cómo Plaspy ingiere y muestra la telemetría de los dispositivos, visite https://www.plaspy.com. Para los detalles más recientes específicos por dispositivo, notas de firmware y referencias de comandos, verifique la información en el sitio del fabricante https://www.iconcox.com/.
