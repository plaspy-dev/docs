---
slug: /teltonika/fm_4100/protocol
id: fm_4100-protocol
sidebar_label: Protocol
title: Teltonika - FM 4100 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for integrating the Teltonika FM 4100 with Plaspy covering connection options and compatibility
keywords:
  - Teltonika FM 4100 protocol
  - Teltonika FM 4100 GPS protocol
  - Teltonika FM 4100 protocol for Plaspy
  - Teltonika FM 4100 communication protocol
  - Teltonika FM 4100 tracking protocol
  - FM 4100 Plaspy integration
  - Teltonika tracking protocol
  - vehicle tracking Teltonika FM 4100
  - FM 4100 GSM tracker protocol
  - Teltonika FM 4100 compatibility
---

# Teltonika - FM 4100 Protocol

This page describes the public protocol context for using the Teltonika FM 4100 tracker with Plaspy. It focuses on how the device communicates with Plaspy at a high level and what connection settings are commonly used for reporting location, sensor inputs, and telematics data. The intent is to give clear, non sensitive guidance that helps you plan integration and troubleshooting without exposing internal parser or firmware internals.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact protocol behavior, available features, and message timing can vary with FM 4100 firmware versions, hardware revisions, and manufacturer implementation choices. For device specific commands, message formats, or the latest firmware notes consult the manufacturer documentation.

## Protocol Overview

The protocol used by the FM 4100 is the device reporting mechanism that allows location, status, and input/output data to be sent from the tracker to a remote server such as Plaspy. In practice this means the tracker collects GNSS coordinates, GSM network data, and peripheral IO values and transmits them over the configured bearer so Plaspy can present them in the platform.

- Enables the FM 4100 to send location reports and telemetry to a backend server
- Carries identification information so Plaspy can associate reports with a device record
- Transports peripheral state such as digital inputs, analog readings, and CAN bus data to Plaspy
- Works over cellular bearers supported by the device such as GPRS or SMS depending on configuration
- Allows the server to receive periodic or event driven messages for tracking and monitoring

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared endpoint and automatically detects the tracker protocol used by the FM 4100. This automatic detection means users generally do not need to select a protocol manually inside Plaspy when the device is configured to point to the Plaspy endpoint.

- Plaspy listens on the same port for all supported trackers and applies automatic protocol detection
- When an FM 4100 reports to the Plaspy endpoint the platform identifies the device by its reported identifiers
- Users normally only need to configure the device to send reports to Plaspy; Plaspy handles protocol mapping
- Proper device configuration and firmware compatibility improve detection accuracy and data completeness
- If a device fails to appear, check device reporting settings and network reachability to the Plaspy endpoint

## Transport and Connection Context

Connection context describes how the FM 4100 reaches Plaspy over the cellular network and which endpoints are commonly used. The FM 4100 can use standard TCP or UDP transport depending on device settings and carrier behavior, and it reports to Plaspy using the shared server and port described below.

- Plaspy server domain for device reporting is d.plaspy.com
- Plaspy server IP address is 54.85.159.138
- The port used by Plaspy for device connections is 8888 and is shared across all supported devices
- The FM 4100 may be configured to use UDP or TCP on port 8888 depending on device support and configuration
- Devices should be set to report to the Plaspy endpoint using the chosen transport and proper APN settings for the SIM

## Protocol Compatibility Notes

- Firmware versions can change message timing, optional fields, or supported features; check the device firmware release notes
- Hardware revisions or optional interfaces such as CAN or RS232 may alter available data reported by the device
- Transport selection (UDP versus TCP) can affect delivery characteristics and should match carrier and device configuration
- SMS reporting is available on the FM 4100 as an alternative bearer but requires a different handling flow than IP reporting
- Verify that the device IMEI and reporting identifiers are correctly configured so Plaspy can associate incoming packets with the correct asset
- For advanced integrations involving custom IO mappings or CAN data extraction consult manufacturer resources before deploying at scale

## Why Protocol Understanding Matters

Understanding the tracker reporting protocol helps ensure a reliable deployment, expedites troubleshooting, and makes it easier to map device capabilities to operational requirements in Plaspy. Awareness of how data is sent and what influences it reduces integration friction and improves long term reliability.

- Faster diagnosis when location or telemetry is missing by checking transport and reporting cadence
- Better planning for data needs such as IO channels, CAN data, or NMEA output based on device capabilities
- Informed decisions about firmware upgrades and configuration changes that may affect message content
- Clearer expectations for behavior over different bearers like GPRS versus SMS
- Easier validation of device reachability to the Plaspy endpoint when using the known domain or IP

## Why Use Plaspy with This Protocol

Using the Teltonika FM 4100 with Plaspy gives organizations a practical path to collect GNSS coordinates, monitor digital and analog inputs, and leverage CAN integrations for vehicle telemetry. The FM 4100 provides the sensing and reporting capabilities while Plaspy provides the backend to receive, normalize, and display that data for monitoring and operational workflows.

To learn more about how Plaspy receives and uses data from devices like the FM 4100 visit https://www.plaspy.com. For the most current and detailed device protocol specifications, firmware changes, and hardware notes consult Teltonika documentation at https://www.teltonika-gps.com/ to verify device specific behavior and compatibility.
