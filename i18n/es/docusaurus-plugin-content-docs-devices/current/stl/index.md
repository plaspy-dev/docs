---
id: stl
title: STL
sidebar_label: STL
sidebar_class_name: menu_item_brand
description: Cómo funcionan los dispositivos GPS STL con Plaspy para rastreo de flotas y activos, modelos compatibles y guía de configuración
keywords:
  - STL
  - GPS STL
  - rastreador GPS STL
  - rastreo STL
  - dispositivos STL
  - rastreo de flotas STL
  - software de rastreo STL
  - STL compatible con Plaspy
  - plataforma de rastreo GPS STL
  - rastreadores STL
---

import BrandCatalog from '@site/src/components/Devices/BrandCatalog';
import { brand } from './index.js';

<img src={brand.image} alt="STL" className="brand-catalog-logo" />

# STL

STL fabrica una variedad de dispositivos de localización GPS empleados en el seguimiento de vehículos y activos. Esta página explica cómo los dispositivos STL pueden integrarse con Plaspy, cómo identificar modelos compatibles y qué esperar al incorporar hardware STL en una implementación de Plaspy. Use el catálogo de dispositivos más abajo para explorar los modelos STL disponibles y ver las unidades compatibles con Plaspy.

<BrandCatalog brand={brand} />

## Cómo funcionan los dispositivos STL con Plaspy

Los dispositivos STL transmiten datos de ubicación y telemetría desde el campo hacia una plataforma de rastreo. Cuando un equipo STL se configura para reportar a Plaspy, envía actualizaciones de posición y mensajes de estado que Plaspy recibe, procesa y muestra en la interfaz de la plataforma. La integración normalmente requiere configurar en el dispositivo la dirección del servidor y las credenciales correctas para que Plaspy pueda recibir las actualizaciones.

Los pasos de configuración detallados, como la selección de protocolo, ajustes de APN y parámetros específicos del equipo, están disponibles en la página de cada dispositivo y en el manual del fabricante. Para la configuración y resolución de problemas a nivel de dispositivo, consulte la entrada correspondiente en el catálogo o contacte a su proveedor de hardware.

## Funciones comunes en los dispositivos STL

Aunque las funciones varían según el modelo, los dispositivos STL suelen ofrecer capacidades relevantes cuando se usan con Plaspy:

- Rastreo de ubicación en tiempo real e informes periódicos de posición
- Alertas por movimiento y manipulación
- Soporte de geocercas y activadores basados en ubicación
- Reporte de nivel de batería y estado de señal
- Reproducción histórica de rutas y telemetría básica

Plaspy presenta y organiza estos datos en mapas, líneas de tiempo y reportes una vez que el dispositivo está configurado para enviar información a la plataforma.

## Casos de uso típicos para los rastreadores GPS STL

Los dispositivos STL son adecuados para diversos escenarios de rastreo, por ejemplo:

- Monitoreo de flotas para visibilidad operativa
- Seguimiento de activos como remolques, equipos y carga
- Revisión del desempeño de conductores y rutas mediante reproducción histórica
- Disuasión de robos y recuperación mediante alertas y seguimiento en vivo
- Gestión de flotas de servicio y alquiler con programación basada en ubicación

Plaspy añade capacidades de visualización, alertas y generación de reportes para convertir los datos del dispositivo en información útil y accionable.

## Por qué elegir Plaspy para monitorear dispositivos STL

Plaspy está diseñado para funcionar con una amplia variedad de dispositivos de rastreo y para presentar los datos en una interfaz unificada y fácil de buscar. Motivos clave por los que los equipos eligen Plaspy con hardware STL incluyen:

- Vista centralizada de mapa y línea de tiempo para dispositivos de múltiples fabricantes
- Reglas de alertas y notificaciones que actúan sobre eventos de dispositivos y geocercas
- Opciones de reportes y exportación para analizar el rendimiento de la flota
- APIs e integraciones para conectar los datos de rastreo con otros sistemas

Si está evaluando una plataforma de monitoreo, revise las capacidades de Plaspy y compare cómo aparecerán los datos que necesita en la plataforma. Más información en https://www.plaspy.com.

## Ayuda para elegir el dispositivo STL adecuado

Para seleccionar el rastreador STL correcto para su proyecto:

1. Use el catálogo al inicio de esta página para ver los modelos que se sabe funcionan con Plaspy.
2. Revise las especificaciones del equipo en el sitio del fabricante en http://siliconwireless.in para confirmar factor de forma, opciones de alimentación y compatibilidad de red.
3. Considere necesidades de telemetría y entradas/salidas, como sensores de entrada, autonomía de batería y requisitos de montaje.
4. Si tiene dudas sobre configuración o compatibilidad, consulte la documentación específica del dispositivo enlazada desde la ficha del catálogo o contacte al soporte de Plaspy para orientación sobre la integración con la plataforma.

La configuración del dispositivo, ajustes de APN y detalles de protocolo se documentan a nivel de dispositivo; esta página de marca se enfoca en compatibilidad y orientación para integración.

## Preguntas frecuentes

P: ¿Qué dispositivos STL son compatibles con Plaspy?
R: El BrandCatalog arriba lista los modelos STL compatibles con Plaspy. Haga clic en un modelo del catálogo para ver la página del dispositivo con los detalles de compatibilidad y las instrucciones de configuración.

P: ¿Puedo usar rastreadores GPS STL con Plaspy?
R: Sí. Los rastreadores STL se pueden configurar para enviar datos de ubicación y telemetría a Plaspy. Los detalles de configuración, como ajustes de servidor y parámetros requeridos, se encuentran en la página del dispositivo o en el manual del fabricante.

P: ¿Plaspy admite monitoreo de flotas con dispositivos STL?
R: Plaspy puede ingerir datos de ubicación y estado desde dispositivos STL y presentarlos en vistas de monitoreo de flotas, reportes y alertas. La forma en que se muestra la información puede depender del modelo y de la telemetría que el dispositivo entregue.

P: ¿Dónde encuentro la documentación de dispositivos STL en Plaspy?
R: Para la documentación del equipo, abra la entrada del dispositivo en el BrandCatalog arriba. Cada página de dispositivo incluye notas de configuración y enlaces a la documentación del fabricante cuando está disponible.

P: ¿Cómo soluciono problemas si un dispositivo STL no reporta a Plaspy?
R: Comience verificando la conectividad de red, los ajustes del servidor y que el dispositivo tenga alimentación y una SIM válida si se requiere. Para pasos de solución de problemas específicos por modelo, consulte la página del dispositivo y los recursos del fabricante.

## Explore los modelos STL

Explore el catálogo al inicio de esta página para ver los modelos STL compatibles y acceder a la documentación y notas de configuración por dispositivo. Si necesita funciones a nivel de plataforma, visite Plaspy para conocer más sobre planes y capacidades en https://www.plaspy.com.

Si requiere ayuda adicional para encontrar el dispositivo adecuado o comprender los pasos de integración, contacte al soporte de Plaspy o a su proveedor de hardware para recibir orientación.
