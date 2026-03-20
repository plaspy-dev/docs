---
slug: /astra_telematics/at405/configuration
id: at405-configuration
sidebar_label: Configuration
title: Astra Telematics - AT405 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configuring the Astra Telematics AT405 for use with Plaspy including server settings and example SMS commands
keywords:
  - Astra Telematics AT405
  - AT405 configuration
  - Astra Telematics setup
  - AT405 setup for Plaspy
  - AT405 server configuration
  - AT405 GPS platform setup
  - AT405 tracking software configuration
  - Plaspy device configuration
  - vehicle tracking AT405
  - AT405 SMS configuration
---

# Astra Telematics - AT405 Configuration

This page covers the public configuration context for using the Astra Telematics AT405 with Plaspy. It consolidates the Plaspy server settings, practical setup workflow, and example SMS commands that are commonly used to point an AT405 at Plaspy. Use this guide to prepare the device for communication with Plaspy and to validate basic connectivity after installation.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer-side setup steps and tools can vary by firmware, hardware revision, installation type, and vendor configuration utilities. The AT405 supports SMS-based configuration commands in many firmware releases, and this page includes the publicly available SMS command examples where applicable.

## Configuration Overview

Configuring the AT405 for Plaspy is primarily about making sure the device can reach the Plaspy server endpoint and report its GNSS and telemetry data reliably. Practical setup focuses on setting the device APN and server endpoint, confirming transport settings, and validating the device appears in Plaspy.

- Configure the operator APN so the device can register on the cellular network and use GPRS.
- Set the GPRS server to the Plaspy endpoint (d.plaspy.com or the Plaspy IP) and configure the shared Plaspy port.
- Choose the transport mode (UDP or TCP) if the device requires a transport selection.
- Save and apply settings, then validate that the device is visible and reporting in Plaspy.
- Use the example SMS commands below if you prefer the manufacturer SMS method for direct configuration.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

All Plaspy-compatible devices use the same port and the Plaspy platform will detect the protocol the tracker uses when it begins sending data to the server.

## Typical Requirements Before Setup

- Device is powered and properly installed according to the AT405 installation guide.
- A valid cellular SIM with data enabled and correct APN information for the operator.
- Ability to send SMS messages to the device if using SMS-based configuration commands.
- Access to the official Astra Telematics configuration method or software for your device firmware and hardware revision.
- Network coverage and GPRS/LTE connectivity at the installation site.
- A Plaspy account or organizational access to the Plaspy platform to verify the device appears after configuration.

## How This Tracker Connects to Plaspy

When configured, the AT405 transmits GNSS location and available telemetry over the cellular network to the shared Plaspy server endpoint and port. Plaspy ingests the incoming device data, automatically identifies the protocol, and makes the device visible in the Plaspy dashboard for monitoring and alerting.

- The tracker is configured to report to d.plaspy.com or the IP 54.85.159.138 on port 8888.
- The AT405 can use UDP or TCP transport to send data to Plaspy depending on firmware and selection.
- Plaspy automatically detects the tracker protocol so no manual protocol selection is required on the platform side.
- Data reported to Plaspy includes location and device status so it can be monitored, historized, and used for alerts.
- After configuration, confirm device visibility and recent telemetry in Plaspy to validate the connection.

## Common Configuration Workflow

1. Access the official Astra Telematics configuration method or software for the AT405 (manufacturer web guide, SMS commands, or vendor tool) appropriate to your firmware.
2. Enter the Plaspy server endpoint using either the domain d.plaspy.com or the IP address 54.85.159.138.
3. Set the server port to 8888 as this is the shared port Plaspy uses for all devices.
4. If the device requires transport selection, choose UDP or TCP according to your installation preference or network requirements.
5. Configure the operator APN and, where required, APN username and password so the device can establish a cellular data session.
6. Apply or save the configuration and restart the device if the device or firmware requires a reboot.
7. Validate that the AT405 reports to Plaspy by checking device presence and recent telemetry in your Plaspy account.

## Example Configuration Commands

The AT405 supports SMS-based configuration in many firmware versions. The following example commands are public, SMS-formatted commands commonly used to set APN and Plaspy server settings. Send each command as a separate SMS to the device phone number from an authorized mobile number.

- Set the operator APN (replace [apn] with your operator APN)
```text
$APAD,[apn]
```

- (Optional) Set the APN username if your operator requires it (replace [apnu] with the APN username)
```text
$APUN,[apnu]
```

- (Optional) Set the APN password if your operator requires it (replace [apnp] with the APN password)
```text
$APPW,[apnp]
```

- Set the GPRS server to the Plaspy IP
```text
$IPAD,54.85.159.138
```

- Set the server port to the shared Plaspy port
```text
$PORT,8888
```

Notes on placeholders:
- [apn] is your mobile operator APN string.
- [apnu] is the APN username if required by the operator.
- [apnp] is the APN password if required by the operator.

Send the optional APN username and password commands only if your operator requires authentication. After sending these SMS commands, apply/save settings and restart the AT405 if recommended by your device firmware.

## Configuration Notes

- Firmware differences can change exact SMS command support, syntax, or required order; confirm with the device firmware release notes.
- SMS-based setup is a common public method for this model but manufacturers also provide software tools and vendor configuration utilities; use the method appropriate for your installation.
- Choose UDP or TCP according to network characteristics; both transports are supported by Plaspy on port 8888.
- All Plaspy devices use the same port and the platform performs protocol detection automatically when the device connects.
- Verify APN details with your mobile operator before configuring to avoid connectivity issues.

## Why Use Plaspy with This Configuration

Pairing the Astra Telematics AT405 with Plaspy provides a straightforward way to collect real-time location, status, and telemetry from vehicles for monitoring, alerts, and historical reporting. The AT405's cellular connectivity and onboard telemetry interfaces make it a practical option for fleet operators who need consistent visibility and remote operational control within the Plaspy platform.

To learn more about Plaspy and how the platform handles device connections and data, visit https://www.plaspy.com. For the most current device specific configuration instructions, firmware behavior, and manufacturer guidance, verify details at the Astra Telematics website https://astratelematics.com/.
