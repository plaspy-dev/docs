---
slug: /v_sun/tlt_3a/configuration
id: tlt_3a-configuration
sidebar_label: Configuration
title: V-SUN - TLT-3A Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el V-SUN TLT-3A con ajustes de servidor Plaspy y comandos SMS de ejemplo
keywords:
  - Configuración V-SUN TLT-3A
  - Configuración TLT-3A
  - Configuración rastreador GPS V-SUN
  - Configuración Plaspy TLT-3A
  - Configuración rastreador vehicular
  - Ajustes servidor rastreador GPS
  - Configuración plataforma de rastreo
  - Integración rastreador Plaspy
  - Configuración SMS TLT-3A
  - Configuración dispositivo GPS
---

# V-SUN - TLT-3A - Configuración

Esta página documenta el contexto público de configuración para usar el rastreador vehicular V-SUN TLT-3A con la plataforma Plaspy. Se enfoca en los ajustes de servidor prácticos y en los comandos SMS comunes y pasos públicamente disponibles para dejar un TLT-3A listo para reportar a Plaspy. Use estas indicaciones junto con el manual del dispositivo y las herramientas del proveedor para completar la instalación.

Plaspy comparte ajustes de servidor entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; el TLT-3A suele soportar configuración vía SMS y GPRS, y los ejemplos que siguen usan los comandos SMS disponibles públicamente y marcadores de posición cuando aplican.

## Resumen de configuración

El objetivo del proceso de configuración es apuntar el TLT-3A al endpoint de red de Plaspy, asegurar que el dispositivo tenga una conexión de datos funcional y activar actualizaciones regulares de posición para que el dispositivo sea visible en Plaspy. Los pasos a continuación son prácticos y adecuados para técnicos que preparan el rastreador para flotas o una instalación puntual.

- Configure el dispositivo para que use a Plaspy como su servidor GPRS y así reporte posiciones y eventos a la plataforma.
- Proporcione el APN y los datos de la SIM correctos para que el rastreador pueda establecer una sesión GPRS.
- Verifique los ajustes de transporte y puerto para que coincidan con los requisitos del servidor de Plaspy en el puerto 8888.
- Habilite el rastreo y ajuste los intervalos de actualización en movimiento y en reposo según la implementación.
- Valide la conectividad y que el dispositivo aparezca en Plaspy después de aplicar los ajustes.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com para configuración basada en DNS cuando el dispositivo solicita un dominio.
- IP del servidor 54.85.159.138 como destino numérico para configuración directa.
- Puerto 8888 que Plaspy usa para todos los dispositivos soportados.
- Soporte de transporte UDP o TCP; el dispositivo puede configurarse usando UDP o TCP en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta, por lo que no es necesario seleccionar el protocolo manualmente en la plataforma.

## Requisitos típicos antes de la instalación

- Un TLT-3A cargado e instalado correctamente con acceso a la interfaz SMS o de configuración del dispositivo.
- Una SIM GSM activa con datos habilitados y con el APN conocido del operador móvil.
- Acceso a un teléfono capaz de enviar SMS o a una herramienta del operador que pueda enviar mensajes de configuración al rastreador.
- Conocimiento de la contraseña del dispositivo; la contraseña por defecto publicada para estos comandos es 0000.
- Conexión web o de red para confirmar la presencia del dispositivo en Plaspy tras la configuración.
- Documentación del fabricante o herramienta del proveedor para opciones específicas de firmware y ajustes avanzados.

## Cómo se conecta este rastreador a Plaspy

El TLT-3A se configura para enviar datos de ubicación y eventos al endpoint y puerto del servidor de Plaspy para que la plataforma pueda mostrar y monitorear el dispositivo. Normalmente, el rastreador usa su conexión GPRS para abrir una sesión TCP o UDP hacia el servidor y luego transmite actualizaciones periódicas de posición.

- El rastreador se apunta al endpoint y puerto compartidos de Plaspy para que los datos entren en la plataforma.
- Una vez activa la sesión GPRS, el dispositivo transmite actualizaciones periódicas según los intervalos configurados para movimiento y reposo.
- Plaspy detecta automáticamente el protocolo usado por el rastreador y acepta la conexión en el puerto 8888.
- El reporte de eventos como violaciones de geocerca o alertas de movimiento se reenvía a Plaspy cuando están habilitados en el dispositivo.
- La plataforma ofrece visibilidad y monitoreo operativo una vez que el dispositivo reporta correctamente al servidor compartido.

## Proceso típico de configuración

1. Acceda al método oficial de configuración del fabricante o al software, o prepare un teléfono con capacidad SMS para enviar mensajes de configuración al dispositivo.
2. Asegúrese de que el dispositivo tenga una SIM funcional y que conozca los valores de APN del operador que va a usar.
3. Ingrese el dominio del servidor de Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en la configuración del servidor del dispositivo.
4. Configure el puerto 8888 como puerto de destino; recuerde que Plaspy usa el mismo puerto para todos los dispositivos.
5. Elija UDP o TCP si el dispositivo requiere selección de transporte; Plaspy soporta ambos en el puerto 8888.
6. Aplique o guarde la configuración y, si aplica, reinicie o apague y encienda el dispositivo para que los cambios tomen efecto.
7. Valide que el dispositivo reporte a Plaspy verificando la conectividad y la hora del último reporte dentro de la plataforma.

## Comandos de configuración de ejemplo

El TLT-3A suele aceptar comandos SMS para configuración. Los siguientes comandos se extraen de ejemplos de configuración disponibles públicamente. La contraseña por defecto del dispositivo usada en estos ejemplos es 0000. Conserve los marcadores de posición al reemplazarlos por los valores de su operador.

- Reinicio de fábrica (opcional paso inicial)
```
*RESET#0000##
```

- Configurar el APN del operador. Reemplace {{apn}} por el APN de su operador. Si su operador requiere usuario y contraseña para el APN, reemplace {{apnu}} y {{apnp}} por esos valores. Los campos de usuario y contraseña son opcionales según el operador.
```
#803#0000#{{apn}}#{{apnu}}#{{apnp}}##
```

- Configurar el servidor GPRS a Plaspy usando la IP pública del servidor y el puerto 8888
```
#804#0000#54.85.159.138#8888##
```

- Establecer el intervalo de actualización en movimiento (ejemplo fija los reportes a 120 segundos)
```
#805#0000#120#1##
```

- Establecer el intervalo de actualización estático o estacionado (ejemplo fija los reportes a 120 segundos)
```
#809#0000#120#1##
```

- Habilitar modo GPRS para que el dispositivo intente usar datos
```
7100000
```

- Habilitar modo GPS (el dispositivo intentará adquirir GPS cuando esté habilitado)
```
2220000
```

Use estos comandos en el orden mostrado al realizar una configuración inicial. Ajuste los valores de tiempo y los campos de APN para que coincidan con los requisitos de su despliegue. Los marcadores de posición {{apn}}, {{apnu}} y {{apnp}} deben reemplazarse por el APN del operador, usuario de APN y contraseña de APN respectivamente cuando sean necesarios.

## Notas de configuración

- La configuración por SMS es un método común para dispositivos TLT-3A; asegúrese de que su sintaxis de SMS coincida con la variante de firmware específica de su rastreador.
- Las revisiones de firmware y hardware pueden cambiar el formato de comandos o las contraseñas por defecto; confirme los comandos con el manual del dispositivo de su unidad.
- Elija TCP o UDP según las necesidades de la instalación; Plaspy acepta ambos transportes en el puerto 8888 y detectará el protocolo automáticamente.
- Confirme el formato del APN con su operador móvil si el dispositivo no logra establecer una sesión GPRS.
- Si utiliza un comando de reset, trate este paso como opcional y ejecútelo solo cuando necesite borrar la configuración existente.

## Por qué usar Plaspy con esta configuración

Configurar un V-SUN TLT-3A para reportar a Plaspy proporciona un camino sencillo para integrar un rastreador GPS fiable en una plataforma centralizada de monitoreo de flotas o activos. Al apuntar el dispositivo al endpoint y puerto compartidos de Plaspy, las organizaciones obtienen visibilidad casi en tiempo real, reporte de eventos y monitoreo sin tener que gestionar endpoints de servidor únicos para cada dispositivo.

Para saber más sobre Plaspy y cómo la plataforma soporta configuraciones comunes de rastreadores, visite https://www.plaspy.com. Verifique los métodos de configuración específicos del dispositivo y el comportamiento del firmware en el sitio del fabricante http://www.v-sun.cc/ ya que la documentación del proveedor y la sintaxis de comandos pueden cambiar con el tiempo.
