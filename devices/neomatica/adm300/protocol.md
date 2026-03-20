---
slug: /neomatica/adm300/protocol
id: adm300-protocol
sidebar_label: Protocol
title: Neomatica - ADM300 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol information for Neomatica ADM300 integration with Plaspy using shared Plaspy connection settings
keywords:
  - Neomatica ADM300 protocol
  - Neomatica ADM300 GPS protocol
  - ADM300 EGTS protocol
  - ADM300 Plaspy compatibility
  - Neomatica tracking protocol
  - ADM300 communication protocol
  - Neomatica tracker protocol
  - Plaspy device compatibility
  - vehicle tracking ADM300
  - fleet tracking ADM300
---

# Neomatica - ADM300 Protocol

This page describes the public protocol context for using the Neomatica ADM300 tracker with Plaspy. It focuses on how the ADM300 communicates with a Plaspy server, the role of the device reporting protocol, and practical considerations for configuring reporting over mobile data. The ADM300 is a compact vehicle tracking terminal with EGTS and an open protocol that allows integration into Plaspy-based fleet systems.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation. For ADM300 deployments that rely on GPRS reporting and EGTS or an open protocol, confirm device settings and firmware behavior with the manufacturer documentation and field testing.

## Protocol Overview

The protocol used by the ADM300 defines how the terminal packages GNSS position, speed, heading, telemetry inputs, events, and status updates for transmission to a remote server. In the context of Plaspy, the protocol determines how the device identifies itself, how events and sensor data are formatted, and how the server interprets incoming messages for real time monitoring and history.

- Enables the ADM300 to report GNSS location, timestamps, speed, heading, and telemetry to Plaspy for live tracking.
- Carries event and input state information such as accelerometer movement, tamper alerts, analog and pulse inputs, and other sensor readings.
- Allows the server to associate incoming messages with a unique device identifier so Plaspy can map data to a known asset.
- Supports batch uploads of stored route history from internal memory or microSD when connectivity permits.
- Works with EGTS and open protocol variants supported by the ADM300 to integrate with third party platforms such as Plaspy.

## How Plaspy Detects the Protocol

Plaspy is designed to accept reporting from many tracker models using a single, shared endpoint and port. When an ADM300 is configured to report to Plaspy, the platform automatically detects the tracker protocol so manual protocol selection inside Plaspy is often not required if the device is correctly pointed to the Plaspy endpoint.

- Plaspy automatically detects the tracker protocol when properly configured reporting data arrives at the server.
- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138 for direct addressing.
- The port is 8888 and Plaspy uses the same port for all supported devices, simplifying device configuration.
- If a device supports both UDP and TCP, configure it to use your chosen transport to the Plaspy endpoint on port 8888.
- Typically you only need to set the reporting server address and transport on the ADM300; Plaspy handles protocol identification at ingestion.

## Transport and Connection Context

The ADM300 sends data over the cellular GPRS link to a configured server address and transport. For Plaspy integration choose the reporting address and transport consistent with your network and device capabilities, and confirm APN and SIM settings are correct so the device can establish a GPRS session.

- The device may be configured using UDP or TCP on port 8888 depending on device support and configuration.
- Devices may point to d.plaspy.com or 54.85.159.138 as the destination host for reporting.
- The port is 8888 and should be used for all devices reporting to Plaspy to maintain consistent ingestion behavior.
- Underlying connectivity uses GPRS over GSM networks so ensure the device has an active data plan and correct APN values.
- For remote management and firmware updates, verify that the device can initiate outbound connections and that your network allows the chosen transport to reach the Plaspy endpoint.

## Protocol Compatibility Notes

- ADM300 supports EGTS and an open protocol which enables integration with Plaspy without custom firmware in many cases.
- Firmware versions can change message fields, capabilities, or optional fields; always verify the device firmware revision when troubleshooting.
- Hardware revisions and optional interfaces such as RS‑485 or additional sensors may alter what telemetry is available to Plaspy.
- Transport selection between UDP and TCP may affect delivery semantics for event acknowledgement or retransmission behavior at the device level.
- Manufacturer default settings sometimes use a placeholder server or port; confirm reporting values are set to the Plaspy endpoint before deployment.
- For large fleets, test a sample device end to end to validate mapping of inputs and events to Plaspy alerts and rules.

## Why Protocol Understanding Matters

A clear understanding of the ADM300 communication protocol helps ensure reliable device onboarding, correct interpretation of telemetry, and faster resolution of issues in the field. Knowing what the device sends and how the server expects to receive it reduces setup time and improves operational uptime.

- Allows accurate mapping of device inputs and events to Plaspy rules and alerting workflows.
- Speeds troubleshooting by narrowing whether an issue is network, transport, device configuration, or protocol related.
- Helps plan firmware update and maintenance windows when protocol or format changes are expected.
- Improves data quality by ensuring the device reports the correct identifiers and telemetry fields for asset association.
- Supports scalable deployments by standardizing reporting settings such as destination host, transport, and port.

## Why Use Plaspy with This Protocol

Using the ADM300 with Plaspy gives operations a practical path to real time mapping, event driven alerts, route playback, and long term history analysis. The ADM300’s combination of GNSS reception, onboard storage, and EGTS or open protocol interoperability means it can feed Plaspy with the telemetry and event data needed for fleet oversight and incident response.

Plaspy’s unified endpoint approach reduces configuration complexity across mixed device fleets by using the same port for all devices and automatic protocol detection. To learn more about how Plaspy works with devices like the ADM300 visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and manufacturer guidance please confirm information with Neomatica at https://neomatica.com/ as implementations and firmware behavior can change over time.
