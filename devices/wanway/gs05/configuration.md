---
slug: /wanway/gs05/configuration
id: gs05-configuration
sidebar_label: Configuration
title: WanWay - GS05 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure the WanWay GS05 for use with Plaspy including server settings and SMS commands
keywords:
  - WanWay GS05 configuration
  - WanWay GS05 setup
  - GS05 server configuration
  - GS05 Plaspy setup
  - WanWay GPS tracker configuration
  - GS05 SMS commands
  - GPS tracker Plaspy compatibility
  - vehicle tracking GS05
  - fleet management GS05
  - GS05 installation guide
---

# WanWay - GS05 Configuration

This page covers the public configuration context for using the WanWay GS05 tracker with Plaspy. It describes the practical server settings, common setup workflow, and the SMS commands included in the public model configuration that are commonly used to point the device at the Plaspy platform for real time tracking and telemetry reporting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The GS05 supports SMS based configuration for APN and GPRS server settings and the commands below reflect the public information available for this model.

## Configuration Overview

Configuring the GS05 for Plaspy ensures the tracker can authenticate on the mobile network, establish a GPRS connection, and send position and sensor data to Plaspy's ingestion endpoint so the device becomes visible in the platform.

- Set the mobile carrier APN and optional APN credentials so the device can use data services.
- Point the device to Plaspy server settings so telemetry is forwarded to the platform.
- Configure reporting intervals so location updates arrive at the expected cadence in Plaspy.
- Enable GPRS reporting mode and verify connectivity using status and parameter queries.
- Validate the device appears in Plaspy after configuration and confirm event reporting.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP as required by the device firmware
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A valid SIM card installed in the GS05 with data enabled and SMS capability for initial configuration
- Power to the device and a stable environment to test connectivity during setup
- Access to the official WanWay configuration method, typically SMS commands or the vendor tool
- APN information from the mobile carrier including optional APN username and password if required
- A registered Plaspy account and a place to monitor the device once it reports to the platform
- Knowledge of the device phone number or a method to send SMS commands to the tracker's SIM

## How This Tracker Connects to Plaspy

The GS05 uses its 3G GSM data connection to open a GPRS session and send GPS location plus onboard sensor telemetry to Plaspy's shared server endpoint. Once the server and transport are configured, the device transmits regular updates that Plaspy ingests for live maps, alerts, and history.

- The device is configured to report to the Plaspy server endpoint d.plaspy.com on port 8888
- Telemetry and position updates are sent over the mobile network using GPRS
- Plaspy receives the incoming packets and automatically detects the device protocol
- Reports appear in Plaspy dashboards for live tracking, route playback, and alerting
- Status and parameter queries can be used to verify device settings remotely

## Common Configuration Workflow

1. Access the official WanWay configuration method or software, or prepare SMS capability to send commands to the GS05.
2. Enter the Plaspy server domain or IP in the device settings using either d.plaspy.com or 54.85.159.138.
3. Set the port to 8888 and choose UDP or TCP if the device requires a transport selection.
4. Configure the carrier APN and optional APN credentials for GPRS data access.
5. Apply or save the configuration and enable GPRS reporting mode on the tracker.
6. Restart the device if the firmware recommends a reboot after configuration.
7. Validate that the device reports to Plaspy and that position updates appear in the platform.

## Example Configuration Commands

The GS05 model supports SMS based configuration. Send these commands as text messages to the tracker SIM number in the order shown when following an SMS workflow. Preserve the placeholders when substituting your carrier details.

1. Configure the carrier APN
```text
APN,[apn]#
```
If your carrier requires APN username and password, use:
```text
APN,[apn],[apnu],[apnp]#
```
- [apn] is the carrier APN name
- [apnu] is the APN username if required
- [apnp] is the APN password if required

2. Setup the GPRS server to point to Plaspy
```text
SERVER,1,d.plaspy.com,8888,0#
```
- This sets server slot 1 to use domain d.plaspy.com on port 8888
- The final digit is a mode flag used by the device firmware

3. Set the reporting update interval
```text
TIMER,60,60#
```
- Example sets the reporting timer; adjust values per your reporting needs and device capability

4. Switch to GPRS mode
```text
GPRSON,1#
```
- Enables GPRS reporting mode on the tracker

5. Check the device configuration
```text
PARAM#
```

6. Check the device status
```text
STATUS#
```

## Configuration Notes

- Firmware differences can change available SMS command syntax or the meaning of numeric flags; confirm the exact command set for your GS05 firmware.
- The GS05 supports SMS based setup as shown, but some installations may prefer the vendor configuration tool or wired interface if available.
- Choose UDP or TCP according to your environment and WAN behavior; test both if uncertain, as Plaspy supports either transport.
- Verify APN values with your mobile operator and use the optional APN username and password placeholders if required.
- After applying server and GPRS settings, allow a few minutes for the device to register on the network and begin sending to d.plaspy.com port 8888.

## Why Use Plaspy with This Configuration

Using the WanWay GS05 with Plaspy provides a straightforward path to real time location and telemetry visibility for vehicles. The GS05's support for SMS configuration and GPRS reporting makes it practical to deploy in fleets where simple, reliable reporting to a single shared Plaspy endpoint is preferred.

Learn more about Plaspy and how it can consolidate tracking data into dashboards at https://www.plaspy.com. For the latest device specific configuration details, firmware notes, and official command documentation for the GS05, verify current information at https://www.wanwaytech.net/.
