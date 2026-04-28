---
slug: /aovx/vl100l/configuration
id: vl100l-configuration
sidebar_label: Configuration
title: AOVX - VL100L Configuration
sidebar_class_name: menu_item_tracker
description: Configuración del AOVX VL100L para Plaspy y compatibilidad de protocolo
keywords:
  - Configuración AOVX VL100L
  - Configuración de servidor AOVX VL100L
  - Configuración del AOVX VL100L para Plaspy
  - Configuración de software de rastreo AOVX VL100L
  - Configuración de plataforma GPS AOVX VL100L
  - Configuración del rastreador GPS VL100L
  - Configuración VL100L en Plaspy
  - Configuración del rastreador AOVX
  - Configuración del rastreador protocolo GT06
  - configuración de rastreo de vehículos
---

# AOVX - VL100L Configuration

Esta página explica el contexto de configuración pública para usar el AOVX VL100L con Plaspy. El VL100L se describe como un rastreador GPS compacto y de bajo costo, compatible con Plaspy mediante soporte del protocolo GT06, lo que lo hace adecuado para seguimiento de flotas, monitoreo básico para seguros y procesos de vigilancia vehicular.

Plaspy utiliza una configuración de servidor compartida para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que la plataforma puede identificar el VL100L sin necesidad de un perfil de servidor independiente por modelo. Aun así, el proceso exacto de configuración del fabricante puede variar según el firmware, la revisión del hardware, el tipo de instalación y las herramientas que proporcione AOVX.

## Resumen de la configuración

Para preparar el AOVX VL100L para Plaspy, es necesario apuntar el rastreador al servidor de Plaspy, asignar el puerto correcto y colocarlo en el modo de comunicación que utiliza el dispositivo. El flujo público de configuración para este modelo también incluye la configuración de APN, un intervalo de actualización y un paso de activación GPRS.

- Configure el rastreador para que pueda الوصول al servidor de Plaspy.
- Use el puerto compartido de Plaspy para que el dispositivo envíe los datos al servicio correcto.
- Confirme que el rastreador esté usando una opción de transporte compatible con la configuración seleccionada.
- Defina el intervalo de reporte para que las actualizaciones de ubicación lleguen con una frecuencia útil.
- Verifique la configuración después de guardarla para que el dispositivo pueda validarse en Plaspy.
- Revise el estado del rastreador para confirmar que el dispositivo esté funcionando como se espera.

## Ajustes del servidor en Plaspy

- Dominio del servidor d.plaspy.com
- Dirección IP del servidor 54.85.159.138
- Puerto 8888
- Compatibilidad de transporte UDP o TCP en el puerto 8888
- Detección automática del protocolo en Plaspy
- Todos los dispositivos compatibles en Plaspy usan el mismo puerto, lo que simplifica la implementación y la administración del servidor

## Requisitos habituales antes de configurar

- Acceso al método oficial de configuración de AOVX o al flujo de comandos SMS del dispositivo
- Un rastreador encendido y listo, con la instalación completada o preparada para la configuración
- Un valor APN válido del operador para el servicio móvil que usará el rastreador
- Conocimiento básico de si la instalación usará UDP o TCP cuando sea necesario elegir el transporte
- Una forma de guardar, aplicar o verificar los cambios de configuración después de enviar los comandos
- La documentación oficial del fabricante disponible para conocer el comportamiento más reciente según la versión del firmware

## Cómo se conecta este rastreador a Plaspy

El VL100L se configura para enviar sus datos de rastreo al servidor compartido de Plaspy, donde la plataforma reconoce automáticamente el protocolo que usa el rastreador. Una vez que el dispositivo apunta a d.plaspy.com o 54.85.159.138 en el puerto 8888, puede comenzar a comunicarse con la plataforma mediante el método de transporte seleccionado.

- El rastreador reporta al punto de conexión compartido de Plaspy y no a una dirección específica por modelo.
- El puerto 8888 se usa para este modelo, en línea con el puerto estándar de dispositivos de Plaspy.
- Se puede usar UDP o TCP si el dispositivo o el flujo de instalación requieren seleccionar el transporte.
- Plaspy detecta automáticamente el protocolo del rastreador, lo que reduce la configuración manual del lado de la plataforma.
- Después de guardar la configuración, el dispositivo debería aparecer en Plaspy cuando empiece a transmitir correctamente.
- Las comprobaciones de estado y conectividad ayudan a confirmar que el reporte esté activo y estable.

## Flujo de configuración habitual

1. Abra el método oficial de configuración de AOVX, como el flujo de comandos SMS del fabricante o la herramienta del proveedor para el dispositivo.
2. Ingrese el APN del operador requerido para que el rastreador acceda a la red móvil.
3. Configure el servidor GPRS como d.plaspy.com o, si es necesario, la IP del servidor de Plaspy 54.85.159.138.
4. Defina el puerto del servidor en 8888.
5. Elija UDP o TCP si el firmware del rastreador o la herramienta de configuración requieren una selección de transporte.
6. Aplique o guarde la configuración para que el dispositivo almacene los nuevos ajustes del servidor.
7. Reinicie el dispositivo si el flujo del fabricante lo requiere para que los cambios surtan efecto.
8. Valide que el rastreador esté reportando a Plaspy y revise el estado del dispositivo después de que vuelva a conectarse.

## Ejemplos de comandos de configuración

El flujo público de configuración del VL100L incluye comandos SMS para APN, servidor, temporizador y modo GPRS. Los marcadores de posición del comando APN representan valores específicos del operador que proporciona la compañía móvil.

- Configurar el APN del operador

```text
APN,{{apn}}#
```

- Configurar el APN del operador con usuario y contraseña opcionales cuando el operador los requiera

```text
APN,{{apn}},{{apnu}},{{apnp}}#
```

- Configurar el servidor GPRS para Plaspy

```text
SERVER,1,d.plaspy.com,8888,0#
```

- Configurar el intervalo de actualización

```text
TIMER,60,60#
```

- Cambiar el rastreador al modo GPRS

```text
GPRSON,1#
```

- Consultar la configuración actual

```text
PARAM#
```

- Consultar el estado del rastreador

```text
STATUS#
```

## Notas de configuración

- El flujo público de comandos para este modelo se basa en SMS, por lo que los equipos de instalación deben seguir cuidadosamente el proceso del fabricante.
- Los valores de APN dependen del operador, y algunas redes pueden requerir campos de usuario y contraseña para el APN.
- Si el dispositivo o el firmware admite elegir transporte, se puede usar UDP o TCP con el mismo puerto 8888 de Plaspy.
- Plaspy detecta automáticamente el protocolo del rastreador, lo que ayuda a simplificar la incorporación una vez que el dispositivo apunta al servidor compartido.
- Las versiones de firmware y las variantes regionales del dispositivo pueden afectar la experiencia exacta de configuración, por lo que la documentación oficial sigue siendo el mejor punto de referencia.

## Por qué usar Plaspy con esta configuración

Usar el AOVX VL100L con Plaspy ayuda a centralizar la visibilidad vehicular en una sola plataforma y, al mismo tiempo, mantiene la configuración sencilla. Una vez que el rastreador se dirige al servidor compartido de Plaspy y se configura para reportar en el intervalo deseado, la plataforma puede recibir los datos del dispositivo, respaldar el monitoreo operativo y ofrecer una vista más clara de la actividad de la flota.

Esta combinación es especialmente práctica para organizaciones que buscan un flujo de rastreo GPS simple, sin tener que planear servidores personalizados para cada modelo de dispositivo. Para conocer más sobre Plaspy, visite https://www.plaspy.com. Para obtener los detalles más recientes de configuración específicos del dispositivo, el comportamiento del firmware y la guía del fabricante, verifique la información más actual en https://www.aovx.com/.
