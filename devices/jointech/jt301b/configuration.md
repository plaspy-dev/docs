---
slug: /jointech/jt301b/configuration
id: jt301b-configuration
sidebar_label: Configuration
title: Jointech - JT301B Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Jointech JT301B with Plaspy shared server settings and SMS command examples
keywords:
  - Jointech JT301B configuration
  - Jointech JT301B setup
  - JT301B Plaspy configuration
  - JT301B server settings
  - asset tracker configuration
  - GPS tracker setup Plaspy
  - Jointech tracker setup
  - JT301B SMS configuration
  - fleet tracking configuration
  - supply chain asset tracking
---

# Jointech - JT301B Configuration

This page covers the public configuration context for using the Jointech JT301B asset tracker with Plaspy. It explains the shared server settings Plaspy requires and shows the practical, manufacturer-facing steps commonly used to point a JT301B at the Plaspy platform using publicly available setup methods.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools, so use this guidance together with Jointech documentation and your device labels or configuration interface.

## Configuration Overview

This configuration process prepares the JT301B to communicate with Plaspy so location, environmental telemetry, and tamper events appear in the platform. For many JT301B deployments, configuration can be completed via the manufacturer's SMS command set or by using any Jointech configuration tool that exposes server, APN, and transport settings.

- Point the device to the Plaspy server endpoint so telemetry is sent to the platform.
- Configure APN and optional APN credentials so the tracker can use cellular GPRS for uplink.
- Select transport mode if required by the device (UDP or TCP) and confirm the same port used by Plaspy.
- Validate connectivity and that the device appears in Plaspy reporting after configuration.
- Use manufacturer tools or SMS commands to apply settings depending on your JT301B firmware and installer workflow.

## Plaspy Server Settings

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support UDP or TCP
- automatic protocol detection in Plaspy

Plaspy uses the same port for all supported devices and automatically detects the tracker protocol, so JT301B devices should be configured to use port 8888 and either UDP or TCP as supported by the device.

## Typical Requirements Before Setup

- Ensure the JT301B has sufficient battery charge and is powered for configuration.
- Have the device identifier ready (device ID as requested by Jointech commands or printed on the unit).
- A valid SIM configured with the correct APN and with data and SMS capability if using SMS setup.
- Access to Jointech configuration instructions or the official SMS command list for the JT301B.
- A test plan to verify the device reports successfully to Plaspy after applying settings.

## How This Tracker Connects to Plaspy

The JT301B is configured to report its location and telemetry to the shared Plaspy server endpoint and port, allowing Plaspy to ingest multi-mode positioning and sensor data for monitoring and alerts.

- The tracker sends position updates and environmental sensor telemetry to d.plaspy.com or 54.85.159.138 on port 8888.
- Plaspy automatically detects the tracker protocol so the device can use either UDP or TCP transport where supported.
- Tamper and event notifications are sent to the same Plaspy endpoint for processing and alerting.
- Once the device is reporting, Plaspy provides visibility, historical logs, and event-driven workflows for operations and security monitoring.

## Common Configuration Workflow

1. Access the official Jointech configuration method or software for the JT301B (SMS command interface or Jointech tool).
2. Enter the Plaspy server endpoint either as d.plaspy.com or as the server IP 54.85.159.138 per the device interface.
3. Set the device port to 8888 in the device configuration fields.
4. Choose UDP or TCP if the device requires a transport selection.
5. Configure the APN and optional APN username and password as provided by your mobile operator.
6. Apply or save the configuration and restart the device if required by the firmware or tool.
7. Validate that the device reports to Plaspy and appears in the platform reporting for the configured device ID.

## Example Configuration Commands

The JT301B may be configured using SMS command messages. The example commands below are provided in the public Jointech format. Replace placeholders with your actual device values before sending.

1. Set the GPRS server and APN
Send an SMS to the tracker with the following text, replacing the placeholders:

```
({{trackerID}},2,S02,129,1,54.85.159.138,8888,{{apn}})
```

- {{trackerID}} — the device ID required by the tracker command set; check the device label or Jointech documentation for the correct ID format.
- {{apn}} — the APN provided by your mobile operator.

2. Set the APN user and password (only if your APN requires credentials)
Send an SMS with this command if APN username and password are required:

```
({{trackerID}},2,S24,129,1,{{apnu}},{{apnp}})
```

- {{apnu}} — APN username placeholder.
- {{apnp}} — APN password placeholder.
- This step is optional when the APN does not require authentication.

Notes on these commands:
- Preserve the exact command format required by Jointech and include the device ID as shown in the manufacturer instructions.
- If your deployment uses a Jointech software tool instead of SMS, apply the same server, IP, and port values through that tool.

## Configuration Notes

- Commands and command syntax can vary by firmware version; confirm the exact SMS format with Jointech documentation for your JT301B firmware.
- Use TCP or UDP based on your network and device support; Plaspy accepts either and will detect the tracker protocol automatically.
- Ensure APN settings are correct for the SIM card in use; incorrect APN commonly prevents data uplink.
- SMS based configuration is commonly supported for this device family; follow security precautions when sending configuration commands by SMS.
- If a configuration does not take effect immediately, reboot the tracker per Jointech guidance and re-verify reporting to Plaspy.

## Why Use Plaspy with This Configuration

Using the JT301B with Plaspy brings asset-level visibility and contextual telemetry into a shared tracking platform. For logistics and supply chain operations, combining multi-mode positioning with environmental and tamper alerts helps reduce loss, accelerate exception response, and support regulatory workflows for sensitive cargo.

To learn more about Plaspy and how it can integrate JT301B telemetry into your tracking workflows, visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time, so verify the latest JT301B instructions and command references at the Jointech website https://www.jointcontrols.com/ before deployment.
