---
slug: /eelink/tk1193g/configuration
id: tk1193g-configuration
sidebar_label: Configuration
title: EElink - TK119‑3G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del EElink TK119‑3G para Plaspy, con ajustes de servidor y ejemplos de SMS
keywords:
  - Configuración EElink TK119‑3G
  - Instalación EElink TK119‑3G
  - Configuración TK119‑3G Plaspy
  - Configuración servidor TK119‑3G
  - Configuración rastreador GPS Plaspy
  - Guía instalación rastreador vehicular
  - Comandos SMS TK119‑3G
  - Ajustes servidor Plaspy
  - Configuración rastreador seguimiento de flotas
  - Integración plataforma GPS
---

# EElink - Configuración del TK119‑3G

Esta página presenta el contexto público de configuración para usar el rastreador EElink TK119‑3G con Plaspy. Se centra en los ajustes prácticos del servidor y en los comandos del fabricante que normalmente se usan para direccionar el dispositivo hacia Plaspy, de modo que la unidad pueda reportar ubicación, alarmas y telemetría a la plataforma.

Plaspy utiliza valores de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Sin embargo, los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor. El TK119‑3G puede configurarse mediante comandos SMS como se muestra a continuación, pero siempre verifique cualquier comportamiento específico del dispositivo con la documentación del fabricante.

## Visión general de la configuración

Configurar el TK119‑3G para Plaspy garantiza que el rastreador pueda establecer una conexión GPRS fiable y enviar datos de ubicación y eventos a la plataforma. El proceso prepara el equipo con el APN y los valores del servidor correctos, selecciona el tipo de transporte si es necesario y valida el comportamiento de reporte para que el rastreador sea visible y utilizable dentro de Plaspy.

- Configure el APN del operador móvil para que el dispositivo use datos móviles y alcance los servidores de Plaspy.
- Establezca el servidor GPRS apuntando a Plaspy usando d.plaspy.com o la IP del servidor y el puerto compartido.
- Confirme el intervalo de subida de datos y el temporizador básico de rastreo para que las actualizaciones de posición cumplan con sus necesidades operativas.
- Valide la conectividad y que el dispositivo aparezca en Plaspy después de la configuración.
- Mantenga un comando de verificación como respaldo para revisar los parámetros del equipo tras la configuración.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Estos valores compartidos son los puntos finales públicos de Plaspy que deberá utilizar al configurar el TK119‑3G para que el dispositivo pueda enviar telemetría y ubicación a la plataforma.

## Requisitos típicos antes de la configuración

- Un TK119‑3G alimentado y con la instalación completada o montado para pruebas.
- Una tarjeta SIM activa con datos y SMS habilitados y las credenciales APN correctas del operador móvil.
- Acceso al método de configuración del fabricante, como comandos SMS o la herramienta del proveedor que soporte el TK119‑3G.
- El APN, usuario APN y contraseña APN para la SIM (aquí se muestran marcadores de posición [apn], [apnu], [apnp]).
- Un teléfono capaz de enviar SMS al dispositivo o acceso a la utilidad de configuración del equipo.
- Una cuenta en Plaspy y la posibilidad de revisar los reportes del dispositivo en la plataforma.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el TK119‑3G envía su posición GPS/LBS y los mensajes de eventos a través de la red celular al endpoint y puerto del servidor Plaspy. Plaspy ingiere esos mensajes, detecta automáticamente el protocolo del dispositivo y presenta los datos para seguimiento en tiempo real, alertas e informes.

- El dispositivo se configura para reportar al endpoint compartido de Plaspy d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.
- Los datos se transmiten por UDP o TCP según la configuración del dispositivo y las condiciones de la red.
- Se transmiten eventos de ubicación y alarma como encendido, exceso de velocidad y choque para su procesamiento inmediato en Plaspy.
- La detección automática de protocolos de Plaspy empata los mensajes del dispositivo con el parser correcto para visualización y alertas.
- El reporte a intervalos regulares (por ejemplo mediante ajustes TIMER) mantiene las actualizaciones de posición consistentes para la supervisión de flotas.

## Flujo de configuración típico

1. Obtenga el método oficial de configuración EElink para el TK119‑3G, normalmente SMS o la herramienta del proveedor, y confirme la compatibilidad de firmware.
2. Ingrese la dirección del servidor Plaspy como d.plaspy.com o la IP del servidor 54.85.159.138 en la configuración de servidor del dispositivo.
3. Configure el puerto del dispositivo en 8888, que es el puerto compartido que Plaspy usa para todos los dispositivos soportados.
4. Elija UDP o TCP si el rastreador requiere selección de transporte y su red tiene preferencia por uno u otro.
5. Configure el APN y las credenciales APN para que el dispositivo pueda establecer una sesión de datos GPRS.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware del rastreador lo requiere.
7. Valide que el dispositivo reporte a Plaspy comprobando el rastreador en la plataforma Plaspy y, opcionalmente, usando el comando de consulta de parámetros del equipo.

## Ejemplos de comandos de configuración

El TK119‑3G puede configurarse enviando mensajes SMS con comandos específicos. Los comandos a continuación son ejemplos públicos proporcionados en la documentación de configuración del fabricante. Preserve los marcadores de posición cuando los reemplace por los valores de su operador.

1. Reinicio opcional a valores de fábrica (solo si necesita volver a los valores por defecto)
```text
FACTORY#
```

2. Establecer la zona horaria a UTC 0
```text
GMT,E,0#
```

3. Configurar el APN del operador
- Reemplace los marcadores de posición con las credenciales de APN de su operador. [apn] es obligatorio. [apnu] y [apnp] son opcionales y se usan cuando el APN requiere usuario o contraseña.
```text
APN,[apn]
```
o con usuario y contraseña
```text
APN,[apn],[apnu],[apnp]#
```

4. Establecer el servidor GPRS a Plaspy por dominio (recomendado)
```text
SERVER,1,d.plaspy.com,8888#
```

5. O establecer el servidor GPRS a Plaspy por IP
```text
SERVER,0,54.85.159.138,8888#
```

6. Configurar el intervalo de subida cada 60 segundos
```text
TIMER,60#
```

7. Consultar los parámetros actuales
```text
PARAM#
```

Nota: Mantenga el orden al realizar una configuración nueva: APN, luego SERVER y después TIMER es una secuencia práctica común. Reemplace [apn], [apnu] y [apnp] con los valores correctos proporcionados por su operador móvil.

## Notas de configuración

- La configuración por SMS es un método común para dispositivos TK119‑3G y se muestra aquí con ejemplos públicos del fabricante. Asegúrese de condiciones seguras para la antena y confirme la entrega del SMS al dispositivo.
- Elija UDP o TCP según su entorno de red; Plaspy soporta ambos y detecta automáticamente el protocolo del dispositivo una vez que los mensajes llegan al servidor.
- Todos los dispositivos en Plaspy usan el mismo puerto 8888, por lo que solo necesita fijar ese puerto para los rastreadores soportados.
- Las revisiones de firmware o las variantes regionales pueden cambiar la sintaxis de los comandos o los comandos disponibles; consulte la lista exacta de comandos con el fabricante si algo falla.
- Verifique cuidadosamente las credenciales APN; ajustes incorrectos del APN son la causa más frecuente por la que un dispositivo no puede alcanzar los servidores de Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el TK119‑3G con Plaspy ofrece una forma directa de integrar la ubicación del equipo, el estado de encendido y los eventos de alarma en una plataforma única para monitoreo e informes. La combinación de hardware compacto y el endpoint compartido de Plaspy simplifica la incorporación de equipos a la flota y reduce la complejidad de configuración por dispositivo.

Aprenda más sobre cómo funciona esta configuración y otras funciones de Plaspy en el sitio principal de Plaspy en https://www.plaspy.com. Para obtener los comandos específicos más recientes del dispositivo, el comportamiento de firmware y detalles del fabricante, verifique siempre la información en el sitio de EElink en https://www.eelink.com.cn/ ya que los métodos de configuración y el comportamiento del equipo pueden cambiar con el tiempo.
