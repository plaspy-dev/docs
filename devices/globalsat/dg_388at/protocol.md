---
slug: /globalsat/dg_388at/protocol
id: dg_388at-protocol
sidebar_label: Protocol
title: GlobalSat - DG-388AT Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for GlobalSat DG-388AT and how it integrates with Plaspy via GPX export and BLE transfer
keywords:
  - GlobalSat DG-388AT
  - DG-388AT protocol
  - GlobalSat GPS logger protocol
  - DG-388AT GPX export
  - BLE GPS logger
  - Plaspy compatibility
  - GPS route history
  - DG-388AT tracking protocol
  - GlobalSat Plaspy integration
  - GPS data import Plaspy
---

# GlobalSat - DG-388AT Protocol

This page provides a public protocol context for using the GlobalSat DG-388AT with Plaspy. It explains how the DG-388AT’s data logger and Bluetooth Low Energy based export workflows relate to Plaspy ingestion and what to expect during integration without exposing private implementation details.

Plaspy uses shared connection settings across supported devices and can automatically detect the tracker protocol for devices that connect directly to Plaspy. Exact protocol behavior and available features can vary by firmware version, hardware revision, and manufacturer implementation, so treat this as general protocol guidance rather than a device firmware reference.

## Protocol Overview

The DG-388AT is primarily a standalone GPS data logger that exports recorded tracks in common formats for import into platforms like Plaspy. Its communication context centers on BLE retrieval and GPX export rather than continuous cellular telemetry to a cloud endpoint.

- For the DG-388AT the primary integration path is GPX export via the ez-Connect app or supplied PC utility and then import into Plaspy for mapping and analysis.
- The device records time, date, speed, altitude, and GPS coordinates to create a detailed route history that Plaspy can consume as historical telemetry.
- Exported files may include POI and waypoint markers that preserve contextual information when imported into Plaspy.
- Protocol responsibilities include durable data capture on the device, reliable metadata timestamps, and export formats that preserve route fidelity for Plaspy ingestion.
- While the DG-388AT uses BLE for transfer, Plaspy also supports devices that report directly to a Plaspy endpoint using the same shared port and will accept data from varied transport methods.

## How Plaspy Detects the Protocol

Plaspy is designed to accept telemetry from many tracker styles and to minimize manual configuration when possible. For devices that connect directly to Plaspy endpoints Plaspy automatically identifies the incoming protocol so users typically do not need to choose a protocol setting inside the platform.

- Plaspy receives device reports at the shared endpoint d.plaspy.com which resolves to 54.85.159.138 for network connections.
- All devices supported by Plaspy use the same port, which is 8888, simplifying device configuration across models.
- Devices that support direct reporting can be configured to use UDP or TCP on port 8888 depending on device capabilities and network requirements.
- Because Plaspy performs automatic protocol detection, a properly configured device pointing to the Plaspy endpoint will normally be handled without manual protocol selection.
- For the DG-388AT the most common workflow is BLE-based retrieval and GPX import; Plaspy accepts GPX uploads and integrates those tracks alongside direct-reporting devices.

## Transport and Connection Context

Transport and connection choices depend on the device capabilities and intended workflow. The DG-388AT focuses on local BLE transfer and file export, but Plaspy’s cloud endpoint is also prepared to receive direct connections from networked trackers.

- The DG-388AT uses Bluetooth Low Energy for pairing and file transfer to a smartphone, tablet, or BLE capable laptop for export.
- Plaspy’s network endpoint is d.plaspy.com which resolves to the public IP 54.85.159.138 for devices configured to send data directly.
- When a device reports directly to Plaspy, it may use either UDP or TCP on port 8888; this is the standard port Plaspy uses for all supported devices.
- All devices in Plaspy use the same port (8888), which streamlines configuration for trackers that connect over cellular or IP networks.
- In practical use the DG-388AT’s BLE export workflow hands off GPX files to a mobile device that then uploads to Plaspy via the internet, separating local device retrieval from Plaspy’s network transport.

## Protocol Compatibility Notes

- Firmware variations can change what metadata is recorded or how exports are formatted; always confirm firmware behavior for the exact unit you own.
- Hardware revisions or regional variants may alter supported features such as waypoint capacity or sensor behavior.
- The BLE export and GPX workflow depends on the ez-Connect app or PC utility versions; mismatches can affect export file structure or metadata.
- If you also use direct reporting trackers in the same Plaspy account, ensure you understand transport differences between file-based imports and live reporting devices.
- Transport selection (UDP vs TCP) matters for devices that connect directly; choose the transport supported by the device and network.
- Validate GPX exports by opening them in a mapping tool before importing to Plaspy to confirm timestamps, coordinates, and POI markers are present.

## Why Protocol Understanding Matters

Understanding how the DG-388AT communicates and how Plaspy ingests that data reduces setup friction, speeds troubleshooting, and helps maintain reliable historical telemetry.

- Confirms that timeline and timezone metadata in exported files match your Plaspy account expectations.
- Helps you choose appropriate export and upload workflows when combining BLE logger data with live trackers.
- Makes it easier to diagnose missing waypoints or mismatched timestamps by checking firmware and app export settings.
- Ensures POI and waypoint metadata are preserved during GPX export so Plaspy receives useful contextual markers.
- Guides decisions about device placement, logging intervals, and power modes to maximize usable route history for Plaspy analytics.

## Why Use Plaspy with This Protocol

Using the DG-388AT with Plaspy is a practical choice when your priority is detailed historical route data rather than continuous live tracking. The logger’s high capacity for waypoints and long battery life make it well suited for batch collection of journeys that can then be imported into Plaspy for mapping, reporting, and comparative analysis across assets.

Plaspy can combine GPX imports from the DG-388AT with live telemetry from other trackers to give a unified view of asset movement and historical routes. To learn more about Plaspy and how it can work with GPX exports and other device types visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and manufacturer implementation details can change over time; verify the latest device specific documentation and firmware releases at https://www.globalsat.com.tw/.
