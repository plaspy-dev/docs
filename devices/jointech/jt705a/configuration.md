---
slug: /jointech/jt705a/configuration
id: jt705a-configuration
sidebar_label: Configuration
title: Jointech - JT705A Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Jointech JT705A with Plaspy server settings and SMS commands
keywords:
  - Jointech JT705A configuration
  - Jointech JT705A setup
  - JT705A Plaspy configuration
  - JT705A server settings
  - container tracker configuration
  - GPS tracker setup
  - Jointech configuration SMS commands
  - Plaspy tracker integration
  - vehicle tracking platform setup
  - GPS platform configuration
---

# Jointech - JT705A Configuration

This page describes the public configuration context for using the Jointech JT705A with Plaspy. It summarizes the practical server settings and the common manufacturer side actions needed to point a JT705A tracker at Plaspy so the device can report location and container telemetry into the platform. Where available, the page includes the SMS command format published for the JT705A to set the device GPRS server and APN.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when data is received. Exact manufacturer side setup steps can vary by firmware release, hardware revision, installation type, and vendor configuration tools. The JT705A supports SMS based configuration in its public command set which is shown below as an example of how to register the device to Plaspy.

## Configuration Overview

Configuring the JT705A for Plaspy prepares the tracker to establish a GPRS session with the Plaspy server endpoint and to deliver position and event data into the platform. The process is focused on setting the correct server endpoint, APN details if required, and verifying transport and connectivity so the device becomes visible in Plaspy.

- Set the tracker GPRS server to the Plaspy endpoint and the shared port so the device can open a data session to Plaspy.
- Configure APN and optional APN credentials to allow the device to use the mobile data network for reporting.
- Choose the transport type on the device if required by firmware either UDP or TCP on the Plaspy port.
- Validate the device ID and SMS command responses where used to confirm successful configuration.
- Confirm the device is reporting into Plaspy and appearing in the platform for live monitoring and playback.

## Plaspy Server Settings

- Server domain d.plaspy.com should be set on the device or used as the target hostname when configuring the tracker.
- Server IP 54.85.159.138 can be used as an alternative target when a numeric address is required.
- Port 8888 is the shared port used by Plaspy for all devices and must be configured on the tracker.
- Transport support for UDP or TCP is available on the device side; select the transport the device firmware supports.
- Plaspy automatically detects the tracker protocol when data arrives so the platform will accept compatible telemetry over the configured transport.

## Typical Requirements Before Setup

- A charged JT705A with an active SIM installed and a mobile data plan that supports GPRS data sessions.
- Access to the device identifier or tracker ID required by the maker for SMS or configuration tools.
- A phone capable of sending SMS to the device when using SMS based commands, or access to the official manufacturer configuration software if preferred.
- Correct APN for the SIM operator and optional APN user and password where required by the carrier.
- The Jointech configuration manual or datasheet for your firmware revision to confirm command formats and any device-specific options.
- A test period and location to validate that the device reports position and events into Plaspy after configuration.

## How This Tracker Connects to Plaspy

The JT705A is configured to establish a GPRS data connection and send position and event updates to the Plaspy server endpoint on the shared port. Once the device opens a session to the specified server and port, Plaspy ingests the incoming data and associates messages with the device identifier for display and alerts.

- The tracker initiates a GPRS connection to d.plaspy.com or 54.85.159.138 on port 8888.
- The device uses the configured transport option UDP or TCP to deliver packets to Plaspy.
- Plaspy automatically detects the tracker protocol and maps incoming telemetry to the correct parser.
- Location updates, tamper or alarm events, and status messages are forwarded to the Plaspy platform for real time visibility.
- After successful configuration and connection, the device becomes visible in Plaspy dashboards and reports.

## Common Configuration Workflow

1. Access the official Jointech configuration method for your JT705A model such as the SMS command interface or manufacturer provided configuration tool.
2. Enter the Plaspy server as either d.plaspy.com or the numeric IP 54.85.159.138 depending on what the device accepts.
3. Set the port to 8888 which is the shared Plaspy port for all devices.
4. If the device requires a transport selection choose UDP or TCP according to your installation needs and device firmware.
5. Configure the APN and optional APN user and password so the device can obtain mobile data service.
6. Apply or save the configuration on the tracker and restart the device if the firmware requires a reboot for network changes to take effect.
7. Validate that the JT705A is reporting to Plaspy by monitoring the device in the Plaspy platform and checking for incoming telemetry.

## Example Configuration Commands

The JT705A supports SMS based configuration using the tracker ID followed by the configuration command. The public command examples below are the documented SMS formats for setting the GPRS server and APN on the JT705A. Replace the placeholders with your device values.

- Note the device ID placeholder labeled [trackerID] which must be the device identifier required by Jointech.
- [apn] is the SIM operator APN string. [apnu] and [apnp] are optional APN user and APN password values if your carrier requires them.

1) Set the GPRS server, IP and port and the APN
```text
([trackerID],2,S02,129,1,54.85.159.138,8888,[apn])
```
You may alternatively replace the numeric IP with the domain
```text
([trackerID],2,S02,129,1,d.plaspy.com,8888,[apn])
```

2) Set the APN user and password if required by your carrier
```text
([trackerID],2,S24,129,1,[apnu],[apnp])
```

Send these SMS messages from a phone to the JT705A following the manufacturer instructions. Keep the order as shown when the device requires APN to be present before initiating a GPRS session.

## Configuration Notes

- Firmware differences across JT705A revisions may affect exact command syntax and supported parameters; always verify commands against your device manual.
- The JT705A supports SMS based setup as shown, but manufacturer tools or desktop configuration software may be available and can simplify bulk provisioning.
- Choosing UDP or TCP depends on installation and network conditions; Plaspy accepts either on port 8888 and will detect the protocol automatically.
- All devices reporting to Plaspy use the same port 8888 so be consistent when provisioning mixed fleets.
- When APN credentials are optional for your operator you can skip the APN user and password command, but ensure the APN string is set.

## Why Use Plaspy with This Configuration

Using the JT705A with Plaspy centralizes container location and event telemetry into a single fleet management platform. For organizations managing multimodal cargo and high security consignments, configuring the JT705A to report to Plaspy provides continuous visibility, alarm routing, and historical playback to support inspections, chain of custody, and incident response workflows.

To learn more about Plaspy visit https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time so confirm the latest JT705A setup information with the manufacturer at https://www.jointcontrols.com/ before large scale provisioning.
