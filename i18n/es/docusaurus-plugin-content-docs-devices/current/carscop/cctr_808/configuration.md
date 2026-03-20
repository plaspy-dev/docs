---
slug: /carscop/cctr_808/configuration
id: cctr_808-configuration
sidebar_label: Configuration
title: Carscop - CCTR-808 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador GPS Carscop CCTR-808 para integrarlo con Plaspy
keywords:
  - Configuración Carscop CCTR-808
  - Instalación Carscop CCTR-808
  - Rastreador GPS Carscop Plaspy
  - Configuración servidor CCTR-808
  - Comandos SMS CCTR-808
  - Configuración rastreo de vehículos
  - Configuración plataforma GPS Carscop
  - Configuración tracker Plaspy
  - Ajustes servidor rastreador GPS
  - Configuración APN CCTR-808
---

# Carscop - Configuración CCTR-808

Esta página describe el contexto público de configuración para usar el rastreador Carscop CCTR-808 con Plaspy. Explica los pasos y comandos públicos prácticos para apuntar el dispositivo a Plaspy, de modo que el equipo pueda reportar ubicación y estado. Entre las características del CCTR-808 que se mencionan están la larga autonomía con batería grande y panel solar, la carcasa resistente IP56, la sujeción magnética sólida, la localización por Cell ID y opciones configurables de intervalo de envío y control por SMS, relevantes al decidir la configuración.

Plaspy emplea ajustes de servidor compartidos entre dispositivos compatibles y detecta el protocolo del rastreador automáticamente cuando el dispositivo se conecta. Los pasos exactos del fabricante pueden variar según versión de firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. Donde existan comandos SMS públicos para el CCTR-808 se muestran más abajo; cuando tenga dudas verifique siempre el comportamiento en la documentación oficial del fabricante.

## Resumen de la configuración

Esta configuración prepara el Carscop CCTR-808 para enviar posición y datos del dispositivo a Plaspy configurando el servidor GPRS, el APN y parámetros básicos del equipo. En el CCTR-808 la configuración puede realizarse mediante comandos SMS, que contemplan una contraseña de dispositivo por defecto y comandos para ajustar zona horaria, credenciales APN, punto final del servidor GPRS y comportamiento de keepalive.

- Habilitar conectividad de red e informes GPRS para que el dispositivo alcance el endpoint de Plaspy.
- Configurar el APN y, si es necesario, el usuario y contraseña del APN para que el rastreador pueda registrarse en la red móvil.
- Indicar el endpoint y puerto del servidor Plaspy para que los datos enviados lleguen al listener compartido.
- Asegurar que el dispositivo permanezca en línea o envíe actualizaciones periódicas para que aparezca en Plaspy y proporcione telemetría oportuna.
- Validar el dispositivo usando la detección automática de protocolo de Plaspy y confirmar su visibilidad en la plataforma.

## Ajustes del servidor Plaspy

Al configurar el CCTR-808 para Plaspy, utilice los siguientes ajustes públicos de servidor:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Todos los dispositivos configurados para Plaspy usan el mismo puerto y patrón de endpoint, por lo que el CCTR-808 debe apuntar a la información del servidor Plaspy indicada arriba.

## Requisitos típicos antes de la configuración

- Un rastreador con batería cargada o alimentación conectada; el CCTR-808 admite autonomía extendida mediante panel solar y batería de gran capacidad.
- Una tarjeta SIM activa con datos y capacidad de SMS instalada en el rastreador para que funcione el APN y el reporte GPRS.
- Acceso a un teléfono con capacidad para enviar SMS o a la herramienta de configuración del fabricante para enviar los comandos de configuración al dispositivo.
- Conocer la contraseña del dispositivo; los ejemplos públicos abajo usan la contraseña por defecto 123456.
- Información correcta del APN del operador móvil para conectividad de datos (APN, y opcionalmente usuario y contraseña).
- Acceso a la documentación oficial de Carscop o herramientas del proveedor para verificar firmware o ajustes avanzados.

## Cómo se conecta este rastreador a Plaspy

El CCTR-808 se configura para reportar su ubicación y estado al listener de Plaspy mediante el ajuste del servidor GPRS del dispositivo al endpoint y puerto de Plaspy. Una vez establecida la comunicación, Plaspy detectará el protocolo automáticamente y comenzará a recibir actualizaciones periódicas.

- El rastreador envía datos GPRS al endpoint de Plaspy d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- El transporte puede configurarse como UDP o TCP; seleccione el que soporte el firmware del dispositivo.
- Plaspy recibe datos de posición y eventos y asigna el dispositivo a la cuenta correspondiente según el identificador del rastreador y el protocolo detectado.
- Los ajustes de keepalive o intervalo de subida en el rastreador determinan con qué frecuencia aparecen las actualizaciones en Plaspy.
- La configuración por SMS permite cambiar servidor, APN, zona horaria y otros ajustes de forma remota en dispositivos ya instalados.

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial del fabricante o a su software, o utilice comandos SMS según la documentación de Carscop.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en el campo de servidor o servidor GPRS del dispositivo.
3. Establezca el puerto del servidor en 8888 como puerto de destino para los informes.
4. Seleccione el tipo de transporte UDP o TCP si el dispositivo requiere elegir el transporte para la conexión al servidor.
5. Configure el APN del operador y, si aplica, el usuario y contraseña del APN para que el dispositivo se registre en la red móvil.
6. Aplique o guarde la configuración y, si es necesario, reinicie el dispositivo para que los cambios surtan efecto.
7. Valide que el dispositivo reporte a Plaspy y que la plataforma detecte el protocolo del rastreador y empiece a mostrar actualizaciones de posición.

## Ejemplos de comandos de configuración

El Carscop CCTR-808 soporta configuración por SMS. Los ejemplos públicos de comandos SMS que se muestran usan la contraseña por defecto del dispositivo 123456. Los comandos están listados en el orden recomendado para la configuración inicial. Se incluyen notas si procede.

- Restaurar ajustes de fábrica (reset opcional)
```text
RESET*123456
```

- Establecer la zona horaria a UTC+0
```text
TIMEZONE*123456*+00
```

- Establecer el APN del operador (reemplazar {{apn}} por el APN de su operador)
```text
APN*123456*{{apn}}
```

- Establecer usuario y contraseña del APN si se requieren (reemplace {{apnu}} y {{apnp}} por credenciales del operador)
```text
USERNAME*123456*{{apnu}}*{{apnp}}
```

- Configurar el servidor GPRS para Plaspy usando la IP pública y el puerto
```text
IP*123456*54.85.159.138,8888
```

- Asegurar que el rastreador permanezca en línea con comportamiento de keepalive
```text
KEEPONLINE*123456
```

Notas sobre los marcadores
- {{apn}} es la cadena APN del operador móvil necesaria para la conectividad de datos.
- {{apnu}} y {{apnp}} son campos opcionales de usuario y contraseña del APN que se usan cuando el operador requiere autenticación.
- Reemplace los marcadores por los valores proporcionados por el operador y envíe cada comando como SMS al número del dispositivo.

## Notas de configuración

- La configuración por SMS se soporta y se usa habitualmente en dispositivos en campo; asegúrese de tener acceso SMS a la SIM del dispositivo.
- La contraseña por defecto que aparece en los comandos públicos es 123456; si un instalador o proveedor la cambió, use la contraseña actual o realice un reinicio autorizado.
- Algunas versiones de firmware o revisiones de hardware pueden emplear sintaxis de comandos SMS ligeramente distinta o comandos adicionales; consulte la documentación del fabricante cuando el comportamiento difiera.
- Elija UDP o TCP según lo que soporte el firmware del rastreador y sus preferencias de red; Plaspy acepta ambos en el puerto compartido.
- Los ajustes de keepalive e intervalo de subida controlan la frecuencia de reporte; equilibre la frecuencia de informes con la duración de la batería para despliegues a largo plazo.

## Por qué usar Plaspy con esta configuración

Usar el Carscop CCTR-808 con Plaspy ofrece una forma sencilla de integrar dispositivos de rastreo duraderos y asistidos por energía solar en una plataforma compartida. Apuntar el equipo a Plaspy con los ajustes de servidor compartidos permite a las organizaciones monitorear la ubicación, ajustar intervalos de reporte y recibir informes de estado, mientras confían en Plaspy para detectar automáticamente el protocolo del dispositivo.

Para obtener más información sobre Plaspy y las configuraciones compatibles visite https://www.plaspy.com. Para los pasos más recientes específicos del dispositivo, notas de firmware y comandos del fabricante, verifique los detalles con Carscop en http://www.carscop.com/ ya que las especificaciones del fabricante y el comportamiento del firmware pueden cambiar con el tiempo.
