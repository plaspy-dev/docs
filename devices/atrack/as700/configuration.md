---
slug: /atrack/as700/configuration
id: as700-configuration
sidebar_label: Configuration
title: ATrack - AS700 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for connecting the ATrack AS700 tracker to Plaspy with shared server settings and practical commands
keywords:
  - ATrack AS700 configuration
  - ATrack AS700 setup
  - AS700 Plaspy setup
  - AS700 server configuration
  - ATrack GPS tracker configuration
  - AS700 LTE tracker setup
  - AS700 asset tracking configuration
  - AS700 fleet management setup
  - AS700 device configuration
  - AS700 GPS platform setup
---

# ATrack - AS700 Configuration

This page covers the public configuration context for using the ATrack AS700 tracker with Plaspy. It consolidates the shared server settings Plaspy requires and presents practical, publicly available device commands and workflow guidance to point an AS700 at the Plaspy platform for telemetry and location reporting.

Plaspy uses shared server settings across all supported devices and automatically detects the tracker protocol while the device reports to the platform. Manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so use these public instructions as a practical starting point and confirm device specifics with manufacturer documentation when needed.

## Configuration Overview

Configuring the AS700 for Plaspy means preparing the device to send GNSS, sensor, and power telemetry to the Plaspy ingestion endpoint and confirming the device is visible in the platform. The following tasks describe the practical purpose of the configuration process.

- Point the device to the Plaspy server endpoint so telematics packets reach the platform.
- Configure reporting behavior and event triggers such as motion or ACC events for timely updates.
- Ensure the device uses binary or supported payload formats accepted by Plaspy and that the transport is correct.
- Validate cellular connectivity and APN settings so the tracker can open a data session to Plaspy.
- Confirm device visibility in Plaspy and verify telemetry such as GNSS fixes and battery or solar status.

## Plaspy Server Settings

- Server domain d.plaspy.com for DNS based configuration and hostname references.
- Server IP 54.85.159.138 as the public ingestion address for Plaspy.
- Port 8888 which Plaspy uses for all trackers.
- Transport support for UDP or TCP; the AS700 may be configured to use either UDP or TCP on port 8888.
- Plaspy automatically detects the tracker protocol, and the platform uses the same port across supported devices.

## Typical Requirements Before Setup

- A charged AS700 with adequate solar or battery power for testing and configuration.
- A working cellular subscription on a compatible SIM or eSIM and the correct APN values for the mobile network.
- Access to manufacturer configuration tools such as ATrack Device Management (ADM) via Bluetooth or USB Type C, or an AT command interface as provided in device documentation.
- The APN, APN username, and APN password values for your SIM provider to populate [apn], [apnu], [apnp] placeholders if required.
- Basic knowledge of whether you will use UDP or TCP for transport so you can select the transport when configuring the device.
- Administrative access to Plaspy so you can verify the device appears in the platform after configuration.

## How This Tracker Connects to Plaspy

The AS700 transmits location, sensor, and power telemetry over the cellular link to the shared Plaspy server endpoint and port. Plaspy ingests these packets and maps them to the device record using the tracker protocol Plaspy detects automatically.

- Device opens a data session using the configured APN and connects to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport is selected as UDP or TCP on the device; Plaspy accepts both and auto detects the protocol in use.
- GNSS fixes, Bluetooth sensor telemetry, and power/solar status are sent as configured reporting payloads.
- Event-driven reports such as ACC or motion triggers cause immediate packets to be sent to Plaspy for real-time alerts.
- Once connected, Plaspy provides visibility through dashboards, historical reporting, and alerting based on the received telemetry.

## Common Configuration Workflow

1. Access the official manufacturer configuration method such as ADM over Bluetooth or USB, or a supported AT command interface described by ATrack.
2. Enter the Plaspy server as either the domain d.plaspy.com or the server IP 54.85.159.138 in the device server or GPRS configuration.
3. Set the port to 8888 which Plaspy uses for all devices.
4. Choose the transport protocol UDP or TCP if the device requires a transport selection.
5. Configure APN settings including [apn], [apnu], and [apnp] as provided by your mobile operator.
6. Apply or save the configuration and restart the device if the manufacturer instructions require a reboot to activate network settings.
7. Validate that the device reports to Plaspy by checking device status in the Plaspy platform and confirming recent telemetry.

## Example Configuration Commands

The AS700 public configuration examples use AT style commands. Preserve the command order where noted and replace placeholders with your carrier APN credentials.

- Set ACC event behavior and reporting for ACC on and off, and apply a reaction rule:
```text
AT$INPT=0,7
AT$REPT=101,1,"%IN0","1",0,1
AT$REPT=102,1,"%IN0","0",0,1
AT$RACT=1,3,2
```

- Set a tracking/reporting interval to 60 seconds:
```text
AT$TRAC=1,60,,,,,2
```

- Set device to binary mode (payload format):
```text
AT$FORM=1,@P,0,""
```

- Configure GPRS server and APN settings pointing to Plaspy. Replace [apn], [apnu], [apnp] with your mobile operator values. This example uses the Plaspy server IP and port 8888:
```text
AT$GPRS=1,"[apn]","[apnu]","[apnp]","54.85.159.138",8888,1,3,30,0,0
```

- Check device status and basic information:
```text
AT$INFO=?
```

Notes on placeholders
- [apn] is your mobile network APN.
- [apnu] is the APN username when required by the carrier.
- [apnp] is the APN password when required by the carrier.

These commands reflect publicly available configuration examples. Use ADM or your chosen manufacturer tool if you prefer a graphical configuration method.

## Configuration Notes

- Firmware and hardware revisions may change command syntax or supported parameters; always confirm commands against the AS700 firmware revision in use.
- Choose UDP for lower overhead and typically faster delivery or TCP where a persistent, connection-oriented transport is preferred; Plaspy accepts both and detects protocol automatically.
- The GPRS AT command above uses the Plaspy server IP 54.85.159.138 and port 8888; you can use d.plaspy.com where DNS is supported by the device.
- If using placeholders for APN credentials, ensure you replace them with exact values from your cellular provider before applying the configuration.
- Configuration can be performed via ADM over Bluetooth or USB Type C or via the AT interface depending on the AS700 configuration method your installation uses.

## Why Use Plaspy with This Configuration

Using the AS700 with Plaspy provides a practical way to combine rugged hardware durability and long-term solar-assisted operation with a unified telematics platform. The shared Plaspy server settings and automatic protocol detection simplify onboarding multiple devices and reduce per-device configuration friction, enabling reliable visibility for containers, trailers, generators, and other remote assets.

To learn more about Plaspy visit https://www.plaspy.com. For device specific configuration methods, firmware details, and the latest manufacturer instructions please verify information on the ATrack website https://www.atrack.com.tw/ since manufacturer specifications and setup procedures can change over time.
