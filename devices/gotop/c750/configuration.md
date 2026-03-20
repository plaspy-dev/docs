---
slug: /gotop/c750/configuration
id: c750-configuration
sidebar_label: Configuration
title: GOTOP - C750 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for GOTOP C750 with Plaspy servers and practical steps to connect the OBD tracker for real time vehicle tracking
keywords:
  - GOTOP C750 configuration
  - GOTOP C750 setup
  - GOTOP C750 server configuration
  - GOTOP C750 Plaspy
  - GOTOP OBD tracker configuration
  - Plaspy tracker setup
  - GPS tracker configuration
  - vehicle tracking setup
  - fleet tracker configuration
  - GPS platform integration
---

# GOTOP - C750 Configuration

This page documents the public configuration context for using the GOTOP C750 OBD GPS tracker with Plaspy. It covers the practical server settings Plaspy requires, typical prerequisites, and the recommended workflow to prepare a C750 for reporting to the Plaspy platform. The content here is intended for technicians and fleet managers who need clear, non proprietary steps to connect the device to Plaspy for real time tracking and event reporting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when data arrives. Manufacturer-side setup steps for the C750 can vary by firmware revision, hardware batch, installation type, and vendor configuration tools, so use the guidance below with the device documentation and the vendor configuration method you have available.

## Configuration Overview

Preparing the C750 for Plaspy focuses on enabling reliable GPRS reporting (or SMS when used) and verifying that the device can reach the Plaspy server endpoint. The goal is to make the tracker visible in Plaspy, verify event reporting, and ensure alerts such as overspeed or power cut are delivered to the platform.

- Configure the device to send data to the Plaspy server endpoint so location and events arrive in the platform.
- Validate mobile connectivity and APN settings so the C750 can use GSM GPRS to transmit telemetry.
- Choose the transport (UDP or TCP) if the device requires a transport selection for GPRS sessions.
- Apply and save the manufacturer configuration, restart the device if needed, and confirm it reports to Plaspy.
- Verify alerts (overspeed, geo-fence, movement, power cut) appear in Plaspy after the device is online.

## Plaspy Server Settings

Use the following Plaspy server settings when configuring the GOTOP C750 for GPRS reporting. Plaspy uses the same port for all supported devices and automatically detects the tracker protocol.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP (the device may be configured using either UDP or TCP on port 8888)
- Automatic protocol detection in Plaspy so the platform detects the incoming tracker protocol

## Typical Requirements Before Setup

- Physical access to the vehicle OBD-II port to plug in the C750 and confirm power.
- An active SIM card with data (GPRS) or SMS capability provisioned for the device.
- APN credentials from the SIM provider if required for GPRS connectivity (APN, APN user, APN password).
- Access to the official GOTOP configuration method or software provided by the vendor for changing server and transport settings.
- A Plaspy account and knowledge of how to verify device reporting within the Plaspy dashboard.
- Ability to receive SMS or monitor GPRS session logs for troubleshooting.

## How This Tracker Connects to Plaspy

The GOTOP C750 reports location and event data to the shared Plaspy server endpoint and port so Plaspy can ingest telemetry and generate alerts. Typical operation uses GPRS for continuous reporting and SMS for on demand checks or fallback reporting where configured.

- The device sends position and event packets to d.plaspy.com or 54.85.159.138 on port 8888.
- Packets may be transmitted over UDP or TCP depending on the C750 configuration; Plaspy supports both transports.
- Plaspy automatically detects the tracker protocol when data arrives, so devices using different protocols can be handled on the same port.
- Telemetry and events such as overspeed, geo-fence breaches, movement, vibration, and power-cut alerts are delivered to Plaspy for processing.
- OBD-II sourced telemetry available from the vehicle can be correlated with GPS and event logs in Plaspy.

## Common Configuration Workflow

1. Access the official GOTOP configuration method or software supplied by the vendor (SMS commands, web tool, or desktop/mobile configuration utility).
2. Ensure the device has a working SIM with data and configure the APN if required by the mobile provider.
3. Enter the Plaspy server as either the domain d.plaspy.com or the server IP 54.85.159.138 in the server field of the configuration tool.
4. Set the port to 8888 as Plaspy uses the same port for all devices.
5. Choose UDP or TCP if the device requires you to select a transport protocol.
6. Apply or save the configuration and restart the device if the manufacturer instructions indicate a restart is required.
7. Validate that the C750 reports to Plaspy by checking for device activity in the Plaspy dashboard and confirming location updates and events are received.

## Example Configuration Commands

No public modelConfiguration commands were provided for the C750 in this reference. Exact configuration commands or SMS strings vary by manufacturer firmware and the vendor tool used to configure the device. In practice you will use the GOTOP configuration method to:

- Set the server to d.plaspy.com or 54.85.159.138
- Set the port to 8888
- Select UDP or TCP if required
- Configure APN details when using GPRS

Consult the GOTOP configuration guide or the vendor-supplied SMS command list for exact syntax and any verification commands.

## Configuration Notes

- Firmware and hardware revisions can change command syntax and available settings; confirm the correct procedure for your device revision with GOTOP documentation.
- If you must choose between UDP and TCP, test both transports; UDP is commonly used for lightweight tracking packets while TCP can be used where reliable delivery is required and supported.
- APN credentials are often required for GPRS connectivity. Keep APN, APN user, and APN password information handy when provisioning devices.
- SMS configuration and SMS-based verification may be available for initial setup or troubleshooting; check vendor documentation for SMS command formats.
- Plaspy uses the same port across devices and automatically detects the protocol, which simplifies server-side settings but does not eliminate the need for correct device configuration.

## Why Use Plaspy with This Configuration

Using the GOTOP C750 with Plaspy provides a low-friction way to add OBD plug-and-play tracking to fleets and individual vehicles. The C750’s built-in GSM/GPRS connectivity and backup battery help maintain reporting during power interruptions, while Plaspy ingests location and event data to power monitoring, alerts, and map-based visibility. This combination is well suited for fleet managers who need quick installation, straightforward telemetry, and reliable event forwarding into a centralized platform.

Learn more about Plaspy at https://www.plaspy.com and verify device specific configuration details and the latest manufacturer documentation at https://www.gotop.cc/ since firmware behavior and setup methods can change over time.
